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

  constructor(private http: HttpClient) {
  }

  getServices(): Observable<any> {
    return this.http.get(`http://localhost:8080/auto-service`);
  }

  /*postOrder(cartList: Service[]): Observable<any> {
    return this.http.post(`http://localhost:8080/auto-service/order`, cartList);
  }*/

  openCheck(): Observable<any> {
    return this.http.get('http://localhost:8080/auto-service/new-order');
  }

  postServiceToCheck(service: Service, check: Check): Observable<any> {
    return this.http.post(`http://localhost:8080/auto-service/order/${check.check_id}`, service);
  }

  closeCheck(check: Check): Observable<any> {
    return this.http.get(`http://localhost:8080/auto-service/order/${check.check_id}`);
  }

  getOpenCheck(): Observable<any> {
    return this.http.get('http://localhost:8080/auto-service/order');
  }

  deleteOrderedServiceFromCheck(orderedService: OrderedService): Observable<any> {
    return this.http.delete(`http://localhost:8080/auto-service/order/${orderedService.service_id}`);
  }
}
