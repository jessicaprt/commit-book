import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    githubUrl : string;
    accessToken : string;
    allUsers : UserModel[]


    getUserSearchResult(searchedName : string) {
        if(searchedName != "") {
            this.githubUrl = "https://api.github.com/search/users?q=" + searchedName;
            this.accessToken = "9632a2d06ed3785075f71b2d425a8c7abad27e88"

            return this.http.get(this.githubUrl, {
                params: new HttpParams().set('access_token', this.accessToken) });
        }        
    }

    getUser(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username;
        this.accessToken = "9632a2d06ed3785075f71b2d425a8c7abad27e88"

        return this.http.get(this.githubUrl, {
            params: new HttpParams().set('access_token', this.accessToken) });
    }

    getCommits(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username + "/events";
        this.accessToken = "9632a2d06ed3785075f71b2d425a8c7abad27e88"

        return this.http.get(this.githubUrl, {
            params: new HttpParams().set('access_token', this.accessToken) });

    }
}