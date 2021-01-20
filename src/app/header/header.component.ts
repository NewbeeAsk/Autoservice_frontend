import {Component, Input, OnInit} from '@angular/core';
import Service from '../service.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public  cartList: Service[];
  show: boolean;

  constructor() {
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
}
