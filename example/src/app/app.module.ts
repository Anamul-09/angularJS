import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import{RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
