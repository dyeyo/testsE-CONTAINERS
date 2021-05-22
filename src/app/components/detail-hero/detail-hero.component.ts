import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../services/heroes.service';
import { HeroeModel } from 'src/app/model/heroe.model';


@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  idUrl: number;
  heroe: any;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUrl = this.route.snapshot.params.id;
    this.getHeroe()
  }

  getHeroe() {
    this.heroesService.getHeroeById(this.idUrl).subscribe((res: any) => {

      this.heroe = res;
      console.log(this.heroe);
    })
  }

}
