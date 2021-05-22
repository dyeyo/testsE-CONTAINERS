import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'heroe/:id', component: DetailHeroComponent, data: { titulo: 'Detalle del heroe' } },
  { path: '**', component: HomeComponent, data: { titulo: 'Inicio' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
