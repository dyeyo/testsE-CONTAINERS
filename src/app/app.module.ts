import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FilterHeroePipe } from './pipes/filter-heroe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    DetailHeroComponent,
    HomeComponent,
    NavComponent,
    FotterComponent,
    FilterHeroePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbProgressbarModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
