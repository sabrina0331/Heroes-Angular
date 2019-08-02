import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { TravelService } from '../travel.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  places: Place[];
  
  constructor(
    private travelService: TravelService 
  ) { }

  ngOnInit() {
    this.getPlaces()
  }

  getPlaces(): void{
    this.travelService.getPlaces()
      .subscribe(places => this.places = places)
  }
}
