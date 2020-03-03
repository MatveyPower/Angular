import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CaseComponent } from './case/case.component';
import { CaseFormComponent } from './case-form/case-form.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes:Routes = [
  {path:'', component:HomePageComponent},
  {path:'catalog', component:CaseComponent},
  {path:'add', component:CaseFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CaseComponent,
    CaseFormComponent
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
