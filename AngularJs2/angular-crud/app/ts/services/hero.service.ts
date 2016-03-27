import {Injectable} from 'angular2/core';
import {IHero} from '../interfaces/IHero';

import {HEROES} from '../mocks/mock-heroes'

@Injectable()
export class HeroService {
    getHeroes(): Promise<IHero[]>{
        return Promise.resolve(HEROES);
    }
    
  getHeroesSlowly() {
    return new Promise<IHero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    )
  };
  
  getHero(id: number) {
      return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
      );
  }
}