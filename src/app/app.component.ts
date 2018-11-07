import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./shared/scss/main.scss']
})

export class AppComponent {
  name : string = "Instagram Browser";
  
  setName(newName : string) {
    this.name = newName;
  }
}