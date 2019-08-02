import { Injectable } from '@angular/core';
import { Place } from './place';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private placesUrl = 'api/places';
 
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string){
    this.messageService.add(`Places: ${message}` )
  }
  private handleError<T> (operation = 'operation',result?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  
  getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(this.placesUrl)
      .pipe(
        tap(_ => this.log(`fetched places`)),
        catchError(this.handleError<Place[]>('getPlaces', []))
      )
  }
  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  searchPlaces(term: string): Observable<Place[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Place[]>(`${this.placesUrl}/?name=${term}`).pipe(
      tap(_ =>this.log(`found places matching "${term}"`)),
      catchError(this.handleError<Place[]>('searchPlaces',[]))
    )
    
  }
}
