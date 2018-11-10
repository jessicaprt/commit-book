import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './shared/components/landingpage/landingpage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InputSearchbarComponent } from './shared/components/inputsearchbar/inputsearchbar.component';
import { UserSearchComponent } from './shared/components/usersearch/usersearch.component';
import { UserSearchItemComponent } from './shared/components/usersearchitem/usersearchitem.component';
import { UserPageComponent } from './shared/components/userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    InputSearchbarComponent,
    UserSearchComponent,
    UserSearchItemComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
