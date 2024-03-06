import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletterResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private _endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';
  
  private httpClient = inject(HttpClient)
  constructor(){}

  public sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = {name, email};

    return this.httpClient.post<NewsletterResponse>(this._endpointUrl, data);
  }
}
