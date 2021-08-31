import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerComponent } from './components/worker/worker.component';


const routes: Routes = [
  { path: '', component: WorkerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
