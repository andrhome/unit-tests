import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserCardComponent } from './views/user-card/user-card.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { LogClicksDirective } from './directives/log-clicks/log-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    ReversePipe,
    LogClicksDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
