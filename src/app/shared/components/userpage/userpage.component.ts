import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';
import { Commit } from '../../models/commit.model';

@Component ({
    selector : 'user-page',
    templateUrl : './userpage.component.html',
    providers: [ UserService ]
})
export class UserPageComponent implements OnInit {
    user$ : Observable<String>;
    image_url$ : Observable<String>;
    location$ : Observable<String>;
    events$ : any;
    commits: Array<Commit>;

    username : string;
    error : string;
    user : string;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.user = this.route.snapshot.paramMap.get('username');
        this.getUser(this.user);
        this.getCommits(this.user);
    }

    getUser(getusername : string) {
        this.userService.getUser(getusername)
            .subscribe(
                (data) => { 
                    this.user$ = data['login'],
                    this.image_url$ = data['avatar_url'],
                    this.location$ = data['location'] },
                error => this.error = error
            );
    }

    getCommits(getUsername : string) {
        console.log("commits");
        this.userService.getCommits(getUsername)
            .subscribe(
                (data) => {
                    let messages : Array<String>;
                    this.events$ = data;
                    this.getMessages();
                },
                error => this.error = error
            )
    }

    getMessages() {
        this.commits = new Array<Commit>();
        console.log(this.events$);

        for (let i in this.events$) {
            let createdAt = this.events$[i]['created_at'];
            let repo = this.events$[i]['repo']['name'];
            let messages = new Array<String>();

            if (this.events$[i]['payload']['commits']) {
                for (let k in this.events$[i]['payload']['commits']) {
                    let message = this.events$[i]['payload']['commits'][k]['message']
                    if (message != undefined)
                        messages.push(message);
                    else 
                        message.push("[ private ]");
                }
                        
                this.commits.push(new Commit(messages, repo, createdAt));
            }
        }
        console.log(this.commits);        
    }
}