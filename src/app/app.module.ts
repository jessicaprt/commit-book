import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './shared/components/landingpage/landingpage.component';
import { HeaderSectionComponent } from './shared/components/headersection/headersection.component';
import { InputSearchbarComponent } from './shared/components/inputsearchbar/inputsearchbar.component';
import { UserSearchComponent } from './shared/components/usersearch/usersearch.component';
import { UserSearchItemComponent } from './shared/components/usersearchitem/usersearchitem.component';
import { UserPageComponent } from './shared/components/userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderSectionComponent,
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
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
