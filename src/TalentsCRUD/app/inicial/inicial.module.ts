import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InicialComponent } from './inicial.component';

@NgModule({
	imports: [ 
		RouterModule,
        CommonModule
	],
    declarations: [
        InicialComponent
	]
})
export class InicialModule {}