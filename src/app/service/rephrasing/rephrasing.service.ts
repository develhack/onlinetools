import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmendationResult } from '../emendation/emendation.service';
import { TranslationService } from '../translation/translation.service';

@Injectable({
  providedIn: 'root'
})
export class RephrasingService {

  constructor(private http: HttpClient, private translationService: TranslationService) { }

  public async rephrase(sentence: EmendationResult.Sentence): Promise<RephrasingResult> {
    const url = 'https://services.gingersoftware.com/rephrase/secured/rephrase';
    const apiKey = 'GingerWebSite';
    const version = '1';
    const apiResult = await this.http.get<ApiResult>(url, { params: { apiKey, version, s: sentence.text } }).toPromise();
    const rephrasingTexts = apiResult.Sentences.map(result => result.Sentence);
    const translatedTexts = await Promise.all(rephrasingTexts.map(text => this.translationService.translate(text, 'en', 'ja')));
    const rephrasings = rephrasingTexts.map((text, index) => ({ text, translated: translatedTexts[index] }));
    return {
      ...sentence,
      rephrasings,
    };
  }
}

export interface RephrasingResult {
  fromIndex: number;
  toIndex: number;
  text: string;
  rephrasings: {
    text: string;
    translated: string;
  }[];
}

interface ApiResult {
  QueryId: number;
  Sentences: {
    Frequency: any;
    Id: number;
    Sentence: string;
  }[];
}
