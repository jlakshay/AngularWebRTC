import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WcWindowModule } from 'angular-window-component';
import { AppComponent } from './app.component';
import { AdatperService } from './adatper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify it as an import
    WcWindowModule.forRoot()
  ],
  providers: [AdatperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
