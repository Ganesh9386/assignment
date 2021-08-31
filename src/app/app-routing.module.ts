import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './component/add-item/add-item.component';
import { EditItemComponent } from './component/edit-item/edit-item.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path : '',
    component : AddItemComponent
  },
  {
    path : 'item-list',
    component : ListItemComponent
  },
  {
    path : 'edit/:id',
    component : EditItemComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
