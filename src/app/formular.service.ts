import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularService {
  protected headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }

  public sendFormular(name: string, email: string, message: string) {
    console.log(name, message, email);
    const body = {name, message, email};
    console.log(body);
    return this.http.post('/api/sendFormular', body, Object.assign({headers: this.headers}));
  }
}
