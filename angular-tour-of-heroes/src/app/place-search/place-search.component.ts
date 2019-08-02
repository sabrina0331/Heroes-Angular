import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Place } from '../place';
import { TravelService } from '../travel.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {

  places$: Observable<Place[]>

  private searchTerms = new Subject<string>();

  constructor(
    private travelService : TravelService

  ) { }

  ngOnInit(): void {
    this.places$ = this.searchTerms.pipe(
      switchMap((term: string) => this.travelService.searchPlaces(term)),
    )
  }


  search(term: string): void {
    this.searchTerms.next(term)
  }
}
