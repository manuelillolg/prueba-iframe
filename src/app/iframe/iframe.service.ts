import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IframeService {
  constructor(private http: HttpClient) {}

  getIframeSrc(): Observable<string> {
    const serviceUrl = "http://89.149.175.221/reports/powerbi/fleets?rs:embeded=true";
    const headers = new HttpHeaders({
      //'Authorization': 'Basic RElHSVRBSVAtUkVQT1JUXGphdmllci5nb256YWxlejpUZW1wb3JhbDAxLg=='
    });

    return this.http.get(serviceUrl, { headers, responseType: 'text' }).pipe(
      map(response => {
        console.log('Received HTML:', response);
        return response;
      }),
      catchError(error => {
        console.error('Error al obtener el src del iframe:', error);
        return throwError(error);
      })
    );
  }
}
