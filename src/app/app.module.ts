import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditItemComponent } from './component/edit-item/edit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemComponent,
    ListItemComponent,
    PageNotFoundComponent,
    EditItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
