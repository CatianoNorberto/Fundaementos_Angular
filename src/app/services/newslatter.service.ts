import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewslatterService {
  private endpointUrl = "https://https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";

  constructor(private http: HttpClient) { }

  senData(name: string, email: string) : Observable<NewslatterMessage>{
    const data = { name, email };

    return this.http.post<NewslatterMessage>(this.endpointUrl, data)
  }
}
