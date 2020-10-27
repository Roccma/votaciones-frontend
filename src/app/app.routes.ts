import { Routes, RouterModule } from '@angular/router';

import { VotacionComponent } from './pages/votacion/votacion.component';
import { GestionComponent } from './pages/gestion/gestion.component';

const routes: Routes = [
    { path: 'votacion', component: VotacionComponent },
    { path: 'gestion', component: GestionComponent },
    { path: '**', component: VotacionComponent },
];

export const routing = RouterModule.forRoot(routes);