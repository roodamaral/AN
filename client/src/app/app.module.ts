import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppServiceService} from './app-service.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { HomeQuotesComponent } from './home-quotes/home-quotes.component';
import { NoteComponent } from './note/note.component'
import { NoteService } from './note.service'
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    HomeQuotesComponent,
    NoteComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppServiceService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
