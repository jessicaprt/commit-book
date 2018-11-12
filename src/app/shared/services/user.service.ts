import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';

const client_id = "27912e19e6a989ab8f50";
const client_secret = "0fa4826043d61831ea0e66a857ed6074de72ffcd";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    githubUrl : string;
    allUsers : UserModel[]


    getUserSearchResult(searchedName : string) {
        if(searchedName != "") {
            this.githubUrl = "https://api.github.com/search/users?q=" + searchedName 
                + "&client_id=" + client_id 
                + "&client_secret" + client_secret;

            return this.http.get(this.githubUrl);
        }        
    }

    getUser(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username;

        return this.http.get(this.githubUrl);
    }

    getCommits(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username + "/events";

        return this.http.get(this.githubUrl);

    }
}