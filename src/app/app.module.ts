import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotacionComponent } from './pages/votacion/votacion.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { routing } from './app.routes';
import { VotacionFormComponent } from './components/votacion-form/votacion-form.component';
import { GestionLinkComponent } from './components/gestion-link/gestion-link.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VotacionComponent,
    GestionComponent,
    VotacionFormComponent,
    GestionLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
