import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {IHero} from '../interfaces/IHero';
import {HeroService} from '../services/hero.service';
import {HeroDetailComponent} from './hero-detail.component'

@Component ({
    selector: 'my-heroes',
    templateUrl: './app/views/master-heros.html',
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    public heroes: IHero[];
    public selectedHero: IHero;
    
    constructor(private _router: Router, private _heroService: HeroService){ }
    ngOnInit(){
        this.getHeroes();
    }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    
    public onSelected(hero: IHero) {
        this.selectedHero = hero;
    }
    
      gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}