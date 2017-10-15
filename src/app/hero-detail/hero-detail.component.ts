import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';

@Component ({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label><input [(ngModel)]="hero.name" placeholder="Nome do Herói"></div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
