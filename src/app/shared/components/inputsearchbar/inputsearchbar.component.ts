import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'input-searchbar',
  templateUrl: './inputsearchbar.component.html'
})

export class InputSearchbarComponent {
    @Input() searchedUsername : string;
    @Output() onSearchMode = new EventEmitter<string>();
    
    onSearchTrigger() {
        this.onSearchMode.emit(this.searchedUsername);
    }
}