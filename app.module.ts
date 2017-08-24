import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';

import { BuildloadComponent } from './components/build-load.component';
import { ShipperComponent } from './components/shipper.component';
import { CustomerComponent } from './components/customer.component';
import { ReceiverComponent } from './components/receiver.component';
import { CarrierComponent } from './components/carrier.component';
import { NavBuildLoadComponent } from './components/nav-build-load.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BuildloadComponent,
    ShipperComponent,
    CustomerComponent,
    ReceiverComponent,
    CarrierComponent,
    NavBuildLoadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

