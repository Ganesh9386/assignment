import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SortComponent } from './sort/sort.component';
import { SearchComponent } from './search/search.component';
import { ExperienceComponent } from './experience/experience.component';
import { DepartmentComponent } from './department/department.component';
import { AllCandidatesComponent } from './all-candidates/all-candidates.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortComponent,
    SearchComponent,
    ExperienceComponent,
    DepartmentComponent,
    AllCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
