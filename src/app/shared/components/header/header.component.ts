import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  title = "GitFeed";
  subtitle = "for GitHub";
  username : string;
  searchStatus = false;

  onSearchEvent(searchedUser: string) {
    this.username = searchedUser;
    this.searchStatus = true;
  }

  checkSearchMode() {
    if (this.searchStatus)
      return 'header-title-container-small';
    return 'header-title-container-big';
  }

  checkSearchModeForTitle() {
    if (this.searchStatus)
      return 'header-title-small';
    return 'header-title-big';
  }

  checkSearchModeForSubtitle() {
    if (this.searchStatus) 
      return 'header-subtitle-small';
    return 'header-subtitle-big';
  }
  checkSearchModeForSearchResults() {
    if (this.searchStatus)
      return 'show-results';
    return 'hide-results';
  }

  getSearchedUsername() {
    return this.username;
  }
}