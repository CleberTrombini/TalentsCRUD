import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CandidatoModule } from './candidato/candidato.module';
import { VagaModule } from './vaga/vaga.module';
import { InicialModule } from './inicial/inicial.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CandidatoModule,
        InicialModule,
        VagaModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }