import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home';
import { AboutComponent } from './components/About';
import { ContactComponent } from './components/Contact';
import { ContactRepComponent } from './components/ContactRep';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'contact/contactrep/:id', component: ContactRepComponent },
  { path: '**', component: HomeComponent }



  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactRepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  // providers: [
  // {provide: LocationStrategy, useClass: HashLocationStrategy}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
