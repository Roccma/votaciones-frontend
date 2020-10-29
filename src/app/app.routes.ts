import { Routes, RouterModule } from '@angular/router';

import { VotacionComponent } from './pages/votacion/votacion.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { MasVotadosComponent } from './components/mas-votados/mas-votados.component';
import { ListarVotosComponent } from './components/listar-votos/listar-votos.component';
import { ModificarClaveComponent } from './components/modificar-clave/modificar-clave.component';
import { NuevaEntidadComponent } from './components/nueva-entidad/nueva-entidad.component';

const routes: Routes = [
    { path: 'votacion', component: VotacionComponent },
    { path: 'gestion', component: GestionComponent,
        children : [
            { path: 'mas_votados', component: MasVotadosComponent },
            { path: 'listar_votos', component: ListarVotosComponent },
            { path: 'modificar_clave', component: ModificarClaveComponent },
            { path: 'nueva_entidad', component: NuevaEntidadComponent },
            { path: '**', component: MasVotadosComponent }
        ]
    },
    { path: '**', component: VotacionComponent },
];

export const routing = RouterModule.forRoot(routes);