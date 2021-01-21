import {Component, OnInit} from '@angular/core';
import {APIService} from './api.service';
import Service from './service.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent implements OnInit {

  title = 'auto-service';
  serviceList!: Service[];
  cartList: Service[];

  constructor(private apiService: APIService) {
    this.cartList = [];
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data: Service[]) => (this.serviceList = data));
  }

  addServiceToCart(service: Service): any {
    this.cartList.push(service);
  }

  deleteServiceFromCart(service: Service): any {
    this.cartList = this.cartList.filter(el => el.service_id !== service.service_id);
  }
}
