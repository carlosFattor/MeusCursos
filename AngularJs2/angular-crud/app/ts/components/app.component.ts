import {Component} from 'angular2/core';
import {IHero} from '../interfaces/IHero';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component'
import {DashboardComponent} from './dashboard.component';
import {HeroService} from '../services/hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: './app/views/main.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    {path: '/heroes/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])

export class AppComponent  {
    public title = 'Tour of Heroes'; 
}