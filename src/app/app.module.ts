import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VotacionComponent } from './pages/votacion/votacion.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonModule } from 'ngx-skeleton';
import { routing } from './app.routes';
import { VotacionFormComponent } from './components/votacion-form/votacion-form.component';
import { GestionLinkComponent } from './components/gestion-link/gestion-link.component';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MasVotadosComponent } from './components/mas-votados/mas-votados.component';
import { ListarVotosComponent } from './components/listar-votos/listar-votos.component';
import { NuevaEntidadComponent } from './components/nueva-entidad/nueva-entidad.component';
import { ModificarClaveComponent } from './components/modificar-clave/modificar-clave.component';
import { AutenticacionFormComponent } from './components/autenticacion-form/autenticacion-form.component';
import { AutenticacionModalComponent } from './components/autenticacion-modal/autenticacion-modal.component';

import { RouterModule } from '@angular/router';
import { DocumentoPipe } from './pipes/documento.pipe';
import { MasVotadosListadoComponent } from './components/mas-votados-listado/mas-votados-listado.component';
import { VotosPostulanteCardComponent } from './components/votos-postulante-card/votos-postulante-card.component';
import { ListarVotosListadoComponent } from './components/listar-votos-listado/listar-votos-listado.component';
import { VotoCardComponent } from './components/voto-card/voto-card.component';
import { GanadoresActualesComponent } from './components/ganadores-actuales/ganadores-actuales.component';
import { VotoDetalleModalComponent } from './components/voto-detalle-modal/voto-detalle-modal.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { EsPostulantePipe } from './pipes/es-postulante.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VotacionComponent,
    GestionComponent,
    VotacionFormComponent,
    GestionLinkComponent,
    NavbarComponent,
    MasVotadosComponent,
    ListarVotosComponent,
    NuevaEntidadComponent,
    ModificarClaveComponent,
    AutenticacionFormComponent,
    AutenticacionModalComponent,
    DocumentoPipe,
    MasVotadosListadoComponent,
    VotosPostulanteCardComponent,
    ListarVotosListadoComponent,
    VotoCardComponent,
    GanadoresActualesComponent,
    VotoDetalleModalComponent,
    SexoPipe,
    EsPostulantePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
