import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersComponent } from './characters/Characters.component';
import { LocationsComponent } from './locations/Locations.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'characters', component: CharactersComponent }
];


@NgModule({
  declarations: [
    CharactersComponent,
    LocationsComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }