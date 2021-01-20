import {Component, Input, OnInit} from '@angular/core';
import Service from '../service.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public  cartList: Service[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
