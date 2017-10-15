import { Component } from '@angular/core';
import { Hero } from './classes/hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco'},
  { id: 13, name: 'Bombasto'},
  { id: 14, name: 'Celeristas'},
  { id: 15, name: 'Magneta'},
  { id: 16, name: 'RubberMan'},
  { id: 17, name: 'Dynamma'},
  { id: 18, name: 'Dr IQ'},
  { id: 19, name: 'Magma'},
  { id: 20, name: 'Tornado'}
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero) {
    this.selectedHero = hero;
  }
}
