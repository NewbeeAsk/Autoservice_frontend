import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Check from './check.model';
import Service from './service.model';
import OrderedService from './orderedService.model';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl: string;
  emptyBody: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.emptyBody = 'empty';
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auto-service`, {observe: 'response'});
  }

  openCheck(): Observable<any> {
    return this.http.post(`${this.baseUrl}/order/new`, this.emptyBody);
  }

  postServiceToCheck(service: Service): Observable<any> {
    return this.http.post(`${this.baseUrl}/order/services`, service);
  }

  deleteOrderedServiceFromCheck(orderedService: OrderedService): Observable<any> {
    return this.http.delete(`${this.baseUrl}/order/services/${orderedService.service_id}`);
  }

  getOpenCheck(): Observable<any> {
    return this.http.get(`${this.baseUrl}/order`);
  }

  closeCheck(check: Check): Observable<any> {
    return this.http.put(`${this.baseUrl}/order`, this.emptyBody);
  }

  getClosedChecks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/order/orders`);
  }

  getCoordinates(): Observable<any> {
    return this.http.get(`${this.baseUrl}/service-stations`);
  }
}
