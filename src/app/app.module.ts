import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VotacionComponent } from './pages/votacion/votacion.component';
import { GestionComponent } from './pages/gestion/gestion.component';
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
    DocumentoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
