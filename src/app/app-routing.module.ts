import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ReposComponent} from "./components/repos/repos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repos/:login', component: ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
