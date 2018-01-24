import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UserBikeComponent } from './user-bike/user-bike.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',component: UsersComponent, children: [
    { path: 'car', component: UserCarComponent, outlet: 'car' },
    { path: 'bike', component: UserBikeComponent, outlet: 'bike' }
  ] },
  {path:'policies', loadChildren:'./lazy-policies/lazy-policies.module#LazyPoliciesModule'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }