import {Component, OnInit} from '@angular/core';
import { APIService } from './api.service';
import Service from './service.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent implements OnInit{
  title = 'auto-service';
  serviceList!: Service[];

  constructor(private apiService: APIService) {
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data: Service[]) => (this.serviceList = data));
  }
}
