import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HeroeModel } from 'src/app/model/heroe.model';

import { HeroesService } from './../../services/heroes.service';
import { Subscription } from 'rxjs';


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
  p: number = 1;

  constructor(private heroesService: HeroesService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getHeores()
  }

  getHeores() {
    this.heroesSub$ = this.heroesService.getData().subscribe(
      (res: any) => {
        this.heroes = res;
        // let Random = Math.floor(Math.random() * 20);
        // let Position = Random >= 20 ? Random : 20;
        // console.log(this.heroes[Position]);
        this.load = false
        // this.p = Math.floor(Math.random() * 12);

      });
  }

  onSearchChange() {
    this.p = 1;
  }

  ngOnDestroy(): void {
    this.heroesSub$.unsubscribe();
  }



}
