import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'input-searchbar',
  templateUrl: './inputsearchbar.component.html'
})

export class InputSearchbarComponent {
    @Input() searchedUsername : string;
    @Output() onSearchMode = new EventEmitter<string>();

    searchTrigger = false;

    form = new FormGroup({
        username: new FormControl('s', Validators.minLength(4))
    });

    get username() : any { return this.form.get('username'); }
    
    onSearchTrigger() {
        this.searchTrigger = true;
        if (this.searchedUsername.length >= 4)
            this.onSearchMode.emit(this.searchedUsername);
    }

    getInputClass() {
        if (this.searchTrigger == true && this.username.invalid)
            return 'search-input-error';
        return 'search-input';
    }
}