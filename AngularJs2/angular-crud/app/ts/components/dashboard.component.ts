import {Component, OnInit} from 'angular2/core';
import {IHero} from '../interfaces/IHero';
import {HeroService} from '../services/hero.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/views/dashboard.html'
})

export class DashboardComponent implements OnInit{
    public heroes: IHero[] = [];
    
    constructor(private _heroService: HeroService, private _router: Router){}
    
    ngOnInit(){
        this.getHeroes();
    }
    
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    gotoDetail(hero: IHero) {
  let link = ['HeroDetail', { id: hero.id }];
  this._router.navigate(link);
}
}