import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { FiternamePipe } from './pipes/fitername.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component'

  const appRoutes : Routes = [
    {path: '', component:PersonViewComponent},
    {path: 'add', component:PersonAddComponent},
    {path: 'edit/:id', component:SecondComponent}

  ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PersonViewComponent,
    PersonAddComponent,
    FiternamePipe,
    HttpComponent,
    HeaderComponent,
    
    

  ],
  imports: [
    TextMaskModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
