
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Material}  from './material.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Material
  ],
  imports: [
    BrowserModule,
    CoreModule,
    // AppRoutingModule,
    // FormsModule,
    BrowserAnimationsModule,    
     Material
  ],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
