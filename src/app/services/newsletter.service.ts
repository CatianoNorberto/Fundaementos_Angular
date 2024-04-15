import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterMessage {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";

  constructor(private http: HttpClient) { }

  senData(name: string, email: string): Observable<NewsletterMessage>{
    const data = { name, email };

    return this.http.post<NewsletterMessage>(this.endpointUrl, data)
  }
}
