import { Component, Input, OnInit } from '@angular/core';
import Service from '../service.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  @Input() public serviceList!: Service[];

  constructor() { }

  ngOnInit(): void {
  }

}
