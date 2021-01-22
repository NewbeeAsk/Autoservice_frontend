import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Check from './check.model';
import Service from './service.model';
import OrderedService from './orderedService.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/auto-service';
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /*postOrder(cartList: Service[]): Observable<any> {
    return this.http.post(`http://localhost:8080/auto-service/order`, cartList);
  }*/

  openCheck(): Observable<any> {
    return this.http.get(`${this.baseUrl}/new-order`);
  }

  postServiceToCheck(service: Service, check: Check): Observable<any> {
    return this.http.post(`${this.baseUrl}/order/${check.check_id}`, service);
  }

  closeCheck(check: Check): Observable<any> {
    return this.http.get(`${this.baseUrl}/order/${check.check_id}`);
  }

  getOpenCheck(): Observable<any> {
    return this.http.get(`${this.baseUrl}/order`);
  }

  deleteOrderedServiceFromCheck(orderedService: OrderedService): Observable<any> {
    return this.http.delete(`${this.baseUrl}/order/${orderedService.service_id}`);
  }

  getClosedChecks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`);
  }
}
