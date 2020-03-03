import { TextMaskModule } from 'angular2-text-mask';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';
import { GoodsFormComponent } from './goods-form/goods-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCategoryPipe } from './shared/filter-category.pipe';
import { FilterQuantityPipe } from './shared/filter-quantity.pipe';


const appRoutes:Routes = [
  {path:'', component:HomePageComponent},
  {path:'catalog', component:GoodsComponent},
  {path:'add', component:GoodsFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GoodsComponent,
    GoodsFormComponent,
    FilterCategoryPipe,
    FilterQuantityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
