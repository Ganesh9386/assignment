import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCandidatesComponent } from './all-candidates/all-candidates.component';
import { DepartmentComponent } from './department/department.component';
import { ExperienceComponent } from './experience/experience.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  {
    path : '',
    component : SortComponent
  },
  {
    path : 'search',
    component : SearchComponent
  },
  {
    path : 'experience',
    component : ExperienceComponent
  },
  {
    path : 'department',
    component : DepartmentComponent
  },
  {
    path : 'all_candidate',
    component : AllCandidatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
