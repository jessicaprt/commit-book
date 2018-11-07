import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './layout/header.component.html'
})

export class HeaderComponent {
  title = "InstaBrowser";
  subtitle = "for Instagram";
  username : string;

  onSearchEvent(searchedUser: string) {
    this.username = searchedUser;
  }
}