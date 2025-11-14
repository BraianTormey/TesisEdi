import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio';
import { PaquetesComponent } from './components/paquetes/paquetes';
import { RutasComponent } from './components/rutas/rutas';
import { ReclamosComponent } from './components/reclamos/reclamos';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'paquetes', component: PaquetesComponent },
    { path: 'rutas', component: RutasComponent },
    { path: 'reclamos', component: ReclamosComponent },
    { path: '**', redirectTo: 'inicio' }
];
