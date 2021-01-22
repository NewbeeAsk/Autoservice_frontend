import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Service from '../service.model';
import {APIService} from '../api.service';
import Check from '../check.model';
import OrderedService from '../orderedService.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public checkList: Check[];
  @Input() public cartList: OrderedService[];
  @Output() getDeletedService = new EventEmitter<OrderedService>();
  @Output() orderCurrentCart = new EventEmitter();
  showCart: boolean;
  showChecks: boolean;

  constructor(private apiService: APIService) {
    this.showCart = true;
    this.showChecks = true;
  }

  ngOnInit(): void {
    this.getChecks();
  }

  getChecks(): any {
  }

  isHiddenCart(): boolean {
    return this.showCart === true;
  }

  showHideCart(): void {
    this.showCart = !this.showCart;
  }

  isHiddenChecks(): boolean {
    return this.showChecks === true;
  }

  showHideChecks(): void {
    this.showChecks = !this.showChecks;
  }

  deleteServiceFromCart(service: OrderedService): any {
    this.getDeletedService.emit(service);
  }

  OrderCart(): any {
    this.orderCurrentCart.emit();
  }
}
