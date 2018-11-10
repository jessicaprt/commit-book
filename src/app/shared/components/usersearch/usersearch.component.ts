import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-search',
  templateUrl: './usersearch.component.html',
  providers: [ UserService ]
})

export class UserSearchComponent implements OnChanges {
    error : any;
    searchUser : string;
    allUsers : any;
    

    constructor(private  userService : UserService) {}

    @Input() searchedUsername : string;

    ngOnChanges() {
        this.showUsers()
    }

    showUsers() {
        if (this.searchedUsername != null && this.searchedUsername.length >=4) {
            this.userService.getUserSearchResult(this.searchedUsername)
            .subscribe(
                (data) => { 
                    this.allUsers = data["items"] },
                error => this.error = error
            );
            console.log(this.allUsers);
        } else {
            this.allUsers = null;
        }
    }
}