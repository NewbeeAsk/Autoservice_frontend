import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Service from '../service.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  @Input() public serviceList!: Service[];
  @Output() addServiceToCart = new EventEmitter<Service>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart(service: Service): any {
    this.addServiceToCart.emit(service);
  }
}
