import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {HeroService} from '../services/hero.service'
import {IHero} from '../interfaces/IHero';


@Component({
    selector: 'hero-detail',
    templateUrl: './app/views/hero-detail.html'
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: IHero;
    
    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams){
                    
                }
    ngOnInit(){
        let id =+this._routeParams.get('id')
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }
    
    goBack() {
       window.history.back();
    }
}