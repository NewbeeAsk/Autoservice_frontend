import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Service from '../service.model';
import {APIService} from '../api.service';
import Check from '../check.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public checkList: Check[];
  @Input() public cartList: Service[];
  @Output() getDeletedService = new EventEmitter<Service>();
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

  deleteServiceFromCart(service: Service): any {
    this.getDeletedService.emit(service);
  }

  OrderCart(): any {
    this.apiService.postOrder(this.cartList).subscribe(data => this.checkList.push(data));
    this.cartList = [];
  }
}
