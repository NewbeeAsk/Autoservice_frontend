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
  show: boolean;

  constructor(private apiService: APIService) {
    this.show = true;
  }

  ngOnInit(): void {
    this.getChecks();
  }

  getChecks(): any {
    this.apiService.getChecks().subscribe((data: Check[]) => (this.checkList = data));
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
    this.apiService.postOrder(this.cartList).subscribe(data => this.checkList.push(data));
  }
}
