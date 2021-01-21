import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Service from '../service.model';
import {APIService} from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public cartList: Service[];
  @Output() getDeletedService = new EventEmitter<Service>();
  show: boolean;

  constructor(private apiService: APIService) {
    this.show = true;
  }

  ngOnInit(): void {
  }

  isHidden(): boolean {
    return this.show === true;
  }

  showHideCart(): void {
    this.show = !this.show;
  }

  deleteServiceFromCart(service: Service): any {
    this.getDeletedService.emit(service);
  }

  OrderCart(): any {
    this.apiService.postOrder(this.cartList).subscribe();
  }
}
