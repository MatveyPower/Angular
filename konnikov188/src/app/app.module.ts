

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { FilterPhonePipe } from './shared/filter-phone.pipe';
import { FilterManufacturerPipe } from './shared/filter-manufacturer.pipe';
import { HttpClientModule } from '@angular/common/http';


const appRoutes:Routes = [
  {path:'', component:HomePageComponent},
  {path:'catalog', component:PhonesComponent},
  {path:'add', component:PhoneFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PhonesComponent,
    PhoneFormComponent,
    FilterPhonePipe,
    FilterManufacturerPipe,
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
