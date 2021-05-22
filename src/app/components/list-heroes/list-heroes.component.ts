import { Component, OnDestroy, OnInit } from '@angular/core';

import { HeroesService } from './../../services/heroes.service';
import { Subscription } from 'rxjs';
import { getRandomItems } from 'src/app/helpers/array.helper';


@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit, OnDestroy {

  heroesSub$: Subscription;
  heroes: Array<any>;
  combat: number;
  buscador: string = '';
  load: boolean = true;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeores()
  }

  getHeores() {
    this.heroesSub$ = this.heroesService.getData().subscribe(
      (res: any) => {
        this.heroes = getRandomItems(res);
        this.load = false
      }, error => {
        console.log(error);
      });
  }


  ngOnDestroy(): void {
    this.heroesSub$.unsubscribe();
  }



}
