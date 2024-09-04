import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import puppeteer from 'puppeteer';

@Injectable({
  providedIn: 'root'
})
export class IframeService {

  private apiUrl = 'http://localhost:3000/scrape';  // URL del endpoint

  constructor(private http: HttpClient) { }

  getCookies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
