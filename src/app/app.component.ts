import {Component, OnInit} from '@angular/core';
import {APIService} from './api.service';
import Service from './service.model';
import CurrentCheck from './currentCheck.model';
import OrderedService from './orderedService.model';
import ChecksByCategory from './ChecksByCategory.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent implements OnInit {

  currentCheck: CurrentCheck;
  title = 'auto-service';
  serviceList!: Service[];
  cartList: Service[];
  checkList: ChecksByCategory[];

  constructor(private apiService: APIService) {
    this.currentCheck = {orderedServices: [], check: {check_id: 0, paid: false, totalCost: 0}};
    this.cartList = [];
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data: Service[]) => (this.serviceList = data));
    this.apiService.getOpenCheck().subscribe(data => this.currentCheck = data);
    if (this.currentCheck == null) {
      console.log(this.currentCheck);
      this.apiService.openCheck().subscribe(data => this.currentCheck = data);
    }
    this.apiService.getClosedChecks().subscribe(data => this.checkList = data);
  }

  addServiceToCart(service: Service): any {
    this.apiService.postServiceToCheck(service)
      .subscribe(data => this.currentCheck.orderedServices.push(data));
  }

  deleteServiceFromCart(service: OrderedService): any {
    this.apiService.deleteOrderedServiceFromCheck(service).subscribe();
    this.currentCheck.orderedServices = this.currentCheck.orderedServices
      .filter(el => el.service_id !== service.service_id);
  }

  OrderCart(): any {
    this.apiService.closeCheck(this.currentCheck.check).subscribe(data => this.checkList.push(data));
    this.apiService.openCheck().subscribe(data => this.currentCheck = data);
    this.apiService.getClosedChecks().subscribe(data => this.checkList = data);
  }
}
