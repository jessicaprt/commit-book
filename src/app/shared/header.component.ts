import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './layout/header.component.html'
})

export class HeaderComponent {
  title = "InstaBrowser";
  subtitle = "for Instagram";
  username : string;
  searchStatus = false;

  onSearchEvent(searchedUser: string) {
    this.username = searchedUser;
    this.searchStatus = true;
  }

  checkSearchMode() {
    if (this.searchStatus)
      return 'header-title-container-small';
    else return 'header-title-container-big';
  }

  checkSearchModeForTitle() {
    if (this.searchStatus)
      return 'header-title-small';
    else return 'header-title-big';
  }

  checkSearchModeForSubtitle() {
    if (this.searchStatus) 
      return 'header-subtitle-small';
    else return 'header-subtitle-big';
  }
}