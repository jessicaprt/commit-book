import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './layout/searchbar.component.html'
})

export class SearchbarComponent {
    @Input() username : string;
    @Output() onSearchMode = new EventEmitter<string>();

    user : string;   
    
    onSearchTrigger() {
        this.onSearchMode.emit(this.user);
    }
}