import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quotesresponse } from '../models/quoteresponse';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) {}

  getQuotes():Observable<Quotesresponse> {
    return this.http.get<Quotesresponse>(`${environment.API_BASE_URL}quotes`);
  }
}
