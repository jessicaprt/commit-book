import { Component, Input } from '@angular/core';

@Component({
    selector:'user-search-item',
    templateUrl : "./usersearchitem.html"
})

export class UserSearchItemComponent {
    @Input() username : string;
    @Input() imageUrl : string;
}