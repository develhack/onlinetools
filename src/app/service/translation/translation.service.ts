import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) { }

  public async translate(text: string, source: string, target: string): Promise<string> {
    const url = 'https://script.google.com/macros/s/AKfycbwzAA_pGczJYtgZ7GHI2N077wCont90Jz7_7_g-vvaFYXsKIPU/exec';
    return this.http.get(url, { params: { text, source, target }, responseType: 'text' }).toPromise();
  }
}
