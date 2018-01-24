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
import { UserCarComponent } from './user-car/user-car.component';
import { UserBikeComponent } from './user-bike/user-bike.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    UsersComponent,
    PageNotFoundComponent,
    UserCarComponent,
    UserBikeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
