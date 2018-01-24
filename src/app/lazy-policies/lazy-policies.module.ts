import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPoliciesRoutingModule } from './lazy-routing.module';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  imports: [
    CommonModule,
    LazyPoliciesRoutingModule
  ],
  declarations: [PoliciesComponent]
})
export class LazyPoliciesModule { }
