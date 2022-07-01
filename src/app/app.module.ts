import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavModule } from './core/components/side-nav/side-nav.module';
import { TopNavModule } from './core/components/top-nav/top-nav.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavModule,
    TopNavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
