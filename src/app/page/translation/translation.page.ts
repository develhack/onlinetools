import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@service/translation/translation.service';
import { EmendationService, EmendationResult } from '@service/emendation/emendation.service';
import { RephrasingService, RephrasingResult } from '@service/rephrasing/rephrasing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.page.html',
  styleUrls: ['./translation.page.scss'],
})
export class TranslationPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationService: TranslationService,
    private emendationService: EmendationService,
    private rephrasingService: RephrasingService) {}

  source = 'en';
  text = '';
  translatedText = '';
  retranslatedText = '';
  emendationResult: EmendationResult | null = null;
  rephrasingResults: RephrasingResult[] = [];

  processing = false;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParamMap => {
      this.source = queryParamMap.get('source') || 'en';
      this.text = queryParamMap.get('text');
      console.dir(this.text);
      if (this.text) this.translate();
    });
  }

  get target() {
    return this.source === 'en' ? 'ja' : 'en';
  }

  async translate() {

    this.router.navigate([], { queryParams: { source: this.source, text: this.text } });

    this.translatedText = '';
    this.retranslatedText = '';
    this.emendationResult = null;
    this.rephrasingResults = [];
    if (!this.text) return;

    this.text = this.text.replace(/\r?\n/g, ' ');

    try {

      this.processing = true;

      const promises: Promise<any>[] = [];

      if (this.source === 'en') {
        promises.push(this.emendationService.emend(this.text).then(this.onEmended.bind(this)));
      }

      this.translatedText = await this.translationService.translate(this.text, this.source, this.target);

      if (this.target === 'en') {
        promises.push(this.emendationService.emend(this.translatedText).then(this.onEmended.bind(this)));
      }

      this.retranslatedText = await this.translationService.translate(this.translatedText, this.target, this.source);

      await Promise.all(promises);

    } finally {
      this.processing = false;
    }
  }

  replace(fromIndex: number, toIndex: number, text: string) {
    this.text = this.text.substring(0, fromIndex) + text + this.text.substring(toIndex);
    this.translate();
  }

  async onEmended(result: EmendationResult) {
    this.emendationResult = result;
    this.rephrase(result.sentences);
  }

  private async rephrase(sentences: EmendationResult.Sentence[]) {
    const rephrasingResults = await Promise.all(sentences.map(sentence => this.rephrasingService.rephrase(sentence)));
    this.rephrasingResults = rephrasingResults.filter(rephrasingResult => rephrasingResult.rephrasings.length);
  }
}
