import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmendationService {

  constructor(private http: HttpClient) { }

  public async emend(text: string): Promise<EmendationResult> {

    const url = 'https://services.gingersoftware.com/Ginger/correct/jsonSecured/GingerTheTextFull';
    const apiKey = 'GingerWebSite';
    const lang = 'US';
    const clientVersion = '2.0';
    const apiResult = await this.http.get<ApiResult>(url, { params: { apiKey, lang, clientVersion, text } }).toPromise();

    const suggestions = this.buildSuggestions(text, apiResult);
    const sentences = this.buildSentences(text, apiResult);

    return { suggestions, sentences };
  }

  private buildSuggestions(text: string, apiResult: ApiResult): EmendationResult.Suggestion[] {

    const apiSuggestions = apiResult.Corrections
      .filter(correction => correction.ShouldReplace && !!correction.Suggestions[0])
      .map(correction => ({ from: correction.From, to: correction.To, text: correction.Suggestions[0].Text }));

    const suggestions: EmendationResult.Suggestion[] = [];
    let lastIndex = 0;
    for (const apiSuggestion of apiSuggestions) {
      if (apiSuggestion.from > 0) {
        suggestions.push({
          shouldReplace: false,
          fromIndex: lastIndex,
          toIndex: apiSuggestion.from,
          original: text.substring(lastIndex, apiSuggestion.from),
        });
      }
      lastIndex = apiSuggestion.to + 1;
      suggestions.push({
        shouldReplace: true,
        fromIndex: apiSuggestion.from,
        toIndex: lastIndex,
        original: text.substring(apiSuggestion.from, lastIndex),
        text: apiSuggestion.text,
      });
    }
    suggestions.push({
      shouldReplace: false,
      fromIndex: lastIndex,
      toIndex: text.length,
      original: text.substring(lastIndex),
    });

    return suggestions;
  }

  private buildSentences(text: string, apiResult: ApiResult): EmendationResult.Sentence[] {
    return apiResult.Sentences
      .map(sentence => ({
        fromIndex: sentence.FromIndex,
        toIndex: sentence.ToIndex + 1,
        text: text.substring(sentence.FromIndex, sentence.ToIndex + 1),
      }));
  }
}

export interface EmendationResult {
  suggestions: EmendationResult.Suggestion[];
  sentences: EmendationResult.Sentence[];
}

export namespace EmendationResult {

  export interface Suggestion {
    shouldReplace: boolean;
    fromIndex: number;
    toIndex: number;
    original: string;
    text?: string;
  }

  export interface Sentence {
    fromIndex: number;
    toIndex: number;
    text;
  }

}

interface ApiResult {
  Corrections: {
    Confidence: number;
    Type: number;
    From: number;
    To: number;
    LrnFrg: string;
    TopLrnCatId: number;
    UXFrgFrom: number;
    UXFrgTo: number;
    LrnFrgOrigIndxs: {
      From: number;
      To: number;
    }[];
    Mistakes: {
      CanAddToDict: boolean;
      From: number;
      To: number;
    }[];
    ShouldReplace: boolean;
    Suggestions: {
      LrnCatId: number;
      Text: string;
    }[];
  }[];
  Sentences: {
    FromIndex: number;
    IsEnglish: boolean;
    ToIndex: number;
  }[];
}
