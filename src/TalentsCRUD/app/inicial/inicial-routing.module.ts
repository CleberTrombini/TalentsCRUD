import { Routes } from '@angular/router'; 

import { InicialComponent } from './inicial.component';

export const InicialRoutes: Routes = [
	//{ path: '', redirectTo: 'inicial' },
    { path: '', component: InicialComponent },
    { path: 'inicial', component: InicialComponent }
];
