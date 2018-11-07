import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel, AllUsers } from '../../models/user.model';

@Component({
  selector: 'user-search',
  templateUrl: './usersearch.component.html',
  providers: [ UserService ]
})

export class UserSearchComponent implements OnChanges {
    error : any;
    user : UserModel;
    searchUser : string;
    allUsers : AllUsers;
    

    constructor(private userService : UserService) {}

    @Input() searchedUsername : string;

    ngOnChanges() {
        this.showUsers()
    }

    showUsers() {
        console.log("searching for username: " + this.searchedUsername);
        this.userService.getUserSearchResult(this.searchedUsername)
            .subscribe(
                (data:AllUsers) => { 
                    this.allUsers = data["items"] },
                error => this.error = error
            );
    }
}