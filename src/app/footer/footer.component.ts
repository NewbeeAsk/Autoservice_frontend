import {Component, OnInit} from '@angular/core';
import {APIService} from '../api.service';
import Coordinate from '../coordinate.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lat!: number;
  lng!: number;
  coordinates: Coordinate[];

  constructor(private apiService: APIService) {
  }

  ngOnInit(): void {
    this.apiService.getCoordinates().subscribe(data => this.coordinates = data);
  }

  defineCoordinates(coordinate: Coordinate): any {
    this.lat = coordinate.lat;
    this.lng = coordinate.lng;
  }
}
