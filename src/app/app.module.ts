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


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HighlightDirective,
    ExponentialStrengthPipe 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
