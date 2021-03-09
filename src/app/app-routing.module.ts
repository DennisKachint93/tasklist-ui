import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskViewComponent} from './components/task-view/task-view.component';
import {TaskAddDialogComponent} from './components/task-edit/task-add-dialog.component';

const routes: Routes = [
  { path: '', component: TaskViewComponent },
  { path: 'task-edit-component', component: TaskAddDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
