import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  private baseUrl = 'http://localhost:3000/posts';

  constructor(public http: HttpClient) { }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = '', header: HttpHeaders): Observable<any> {
    let requestOptions = {
      headers: header
    };
    return this.http.get(this.getUrl(url), requestOptions);
  }

  public post(url: string = '', data, header: HttpHeaders): Observable<any> {
    let requestOptions = {
      headers: header
    };
    return this.http.post(this.getUrl(url), data, requestOptions);
  }

  public put(url: string = '', data: any = {}, header: HttpHeaders): Observable<any> {
    let requestOptions = {
      headers: header
    };
    return this.http.put(this.getUrl(url), data, requestOptions);
  }

  public delete(url: string = '', header: HttpHeaders): Observable<any> {
    let requestOptions = {
      headers: header
    };
    return this.http.delete(this.getUrl(url), requestOptions);
  }
}
