import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { InjectionToken } from '@angular/core/src/di/injection_token';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { directive } from '@angular/core/src/render3/instructions';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    UsersComponent,
    PageNotFoundComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
