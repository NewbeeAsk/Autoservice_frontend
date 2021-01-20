import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(`http://localhost:8080/auto-service`);
  }
}
