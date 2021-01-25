import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import Service from '../service.model';
import {AsyncAction} from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnChanges {

  @Input() public serviceList!: Service[];
  categoryServiceList!: Service[];
  @Output() addServiceToCart = new EventEmitter<Service>();
  SelectedValue: string;

  constructor() {
    this.SelectedValue = 'all';
    this.categoryServiceList = [];
  }

  ngOnChanges(): any {
    this.categoryServiceList = this.serviceList;
  }

  addToCart(service: Service): any {
    this.addServiceToCart.emit(service);
  }

  searchByCategory(): any {
    if (this.SelectedValue === 'all') {
      this.categoryServiceList = this.serviceList;
    } else {
      this.categoryServiceList = this.serviceList
        .filter(el => el.category === this.SelectedValue);
    }
  }
}
