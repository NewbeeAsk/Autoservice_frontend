import {Component, OnInit} from '@angular/core';
import {APIService} from '../api.service';
import ServiceStation from '../ServiceStation.model';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentAutoService: ServiceStation = {id: 1, city: 'random', lng: 32.321311, lat: 32.123123};
  AutoServices: ServiceStation[];

  constructor(private apiService: APIService, private route: ActivatedRoute) {
    this.route.params.pipe(
      switchMap((params): any => ( console.log(params)
      )));
  }

  ngOnInit(): void {
    this.apiService.getCoordinates().subscribe(data => this.AutoServices = data);
  }

  defineCoordinates(serviceStation: ServiceStation): any {
    this.currentAutoService = serviceStation;
  }

  isCurrentAutoService(autoService: ServiceStation): any {
    return autoService.lat === this.currentAutoService.lat && autoService.lng === this.currentAutoService.lng;
  }
}
