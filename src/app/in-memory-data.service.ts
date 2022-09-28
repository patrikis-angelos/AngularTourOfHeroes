import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      { id: 2, name: 'Prof. Chaos' },
      { id: 3, name: 'OPM' },
      { id: 4, name: 'Magma' },
      { id: 5, name: 'Super Barista' },
      { id: 6, name: 'Tatsumaki' },
      { id: 7, name: 'Berserk' },
      { id: 8, name: 'Dr. Nice' },
      { id: 9, name: 'Dr. Not So Nice' },
      { id: 10, name: 'Bombasto' },
      { id: 11, name: 'Celeritas' }
    ]
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
