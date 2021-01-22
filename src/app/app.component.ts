import {Component, OnInit} from '@angular/core';
import {APIService} from './api.service';
import Service from './service.model';
import Check from './check.model';
import CurrentCheck from './currentCheck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent implements OnInit {

  currentCheck!: CurrentCheck;
  title = 'auto-service';
  serviceList!: Service[];
  cartList: Service[];
  checkList: Check[];

  constructor(private apiService: APIService) {
    this.cartList = [];
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data: Service[]) => (this.serviceList = data));
    this.apiService.getOpenCheck().subscribe(data => this.currentCheck = data);
    if (this.currentCheck == null){
    this.apiService.openCheck().subscribe(data => this.currentCheck = data);
    }
  }

  addServiceToCart(service: Service): any {
    this.cartList.push(service);
  }

  deleteServiceFromCart(service: Service): any {
    this.cartList = this.cartList.filter(el => el.service_id !== service.service_id);
  }
}
