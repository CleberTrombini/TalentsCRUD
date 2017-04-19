import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoRoutes } from './candidato/candidato-routing.module';
import { VagaRoutes } from './vaga/vaga-routing.module';
import { InicialRoutes } from './inicial/inicial-routing.module';

export const routes: Routes = [
	...CandidatoRoutes,
    ...VagaRoutes,
    ...InicialRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}