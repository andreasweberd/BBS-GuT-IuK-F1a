import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NotfoundpageComponent } from 'src/app/pages/notfoundpage/notfoundpage.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { OffersComponent } from './pages/offers/offers.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NotfoundpageComponent,
      OffersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCardModule,
    MatSelectModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
