import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SOSWorkersComponent } from './components/sosworkers/sosworkers.component';
import { SOSWorkerComponent } from './components/sosworker/sosworker.component';
import {SosWorkersService} from './services/sos-workers-service.service';
import { HttpClientModule } from '@angular/common/http';
import {CONST_ROUTING} from './app.routing';
import {
  MatCardModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    SOSWorkersComponent,
    SOSWorkerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CONST_ROUTING,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [SosWorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
