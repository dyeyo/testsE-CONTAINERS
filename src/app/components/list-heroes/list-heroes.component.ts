import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../../services/heroes.service';
import { Subscription } from 'rxjs';
import { getRandomItems } from 'src/app/helpers/array.helper';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const HERO_KEY = makeStateKey('HERO_KEY');

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  heroesSub$: Subscription;
  heroes: Array<any>;
  combat: number;
  buscador: string = '';
  load: boolean = true;


  constructor(
    private heroesService: HeroesService,
    private state: TransferState
  ) { }

  ngOnInit(): void {
    this.getHeores()
  }

  getHeores() {
    this.heroes = this.state.get<Array<any>>(HERO_KEY, null);

    if (!this.heroes) {
      this.heroesService.getData().subscribe(
        (res: any) => {
          this.heroes = getRandomItems(res);
          this.state.set<Array<any>>(HERO_KEY, this.heroes);
          this.load = false;
        }, error => {
          console.log(error);
        });
    } else {
      this.load = false;
    }



  }

}
