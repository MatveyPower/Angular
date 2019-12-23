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


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PersonViewComponent,
    PersonAddComponent,
    FiternamePipe,
    

  ],
  imports: [
    TextMaskModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
