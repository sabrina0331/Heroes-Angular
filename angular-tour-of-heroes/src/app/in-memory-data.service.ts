import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Place } from './place';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // createDb(){
  //   const heroes = [
  //     { id: 11, name: 'Dr Nice' },
  //     { id: 12, name: 'Narco' },
  //     { id: 13, name: 'Bombasto' },
  //     { id: 14, name: 'Celeritas' },
  //     { id: 15, name: 'Magneta' },
  //     { id: 16, name: 'RubberMan' },
  //     { id: 17, name: 'Dynama' },
  //     { id: 18, name: 'Dr IQ' },
  //     { id: 19, name: 'Magma' },
  //     { id: 20, name: 'Tornado' }
  // ];
  // return {heroes};
  // }

  createDb(){
    //固定的 名字 createddb
    const places = [
      { id: 1, name: 'Japan'},
      { id: 2, name: 'China'},
      { id: 3, name: 'America'},
      { id: 4, name: 'Canada'},
      { id: 5, name: 'Korea'},
      { id: 6, name: 'Germany'},
      { id: 7, name: 'Taiwan'},
      { id: 8, name: 'Singapore'},
      { id: 9, name: 'Australia'},
      { id: 10, name: 'Mongolia'},
    
  ];
  return {places};
  }
  

  // genId(heroes: Hero[]): number {
  //   return heroes.length> 0? Math.max(...heroes.map(hero=>hero.id))+1 : 11;
  // }

 genplace(places: Place[]): number{
   return places.length> 0? Math.max(...places.map(place=>place.id)) +1: 11;
 }

  constructor() { }
}
