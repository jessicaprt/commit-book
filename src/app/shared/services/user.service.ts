import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';

const ACCESS_TOKEN = "1239bbf2046fe6af19bd3cea7dbff9716d16c4df";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    githubUrl : string;
    allUsers : UserModel[]


    getUserSearchResult(searchedName : string) {
        if(searchedName != "") {
            this.githubUrl = "https://api.github.com/search/users?q=" + searchedName;

            return this.http.get(this.githubUrl, {
                params: new HttpParams().set('access_token', ACCESS_TOKEN) });
        }        
    }

    getUser(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username;

        return this.http.get(this.githubUrl, {
            params: new HttpParams().set('access_token', ACCESS_TOKEN) });
    }

    getCommits(username : string) {
        this.githubUrl = "https://api.github.com/users/" + username + "/events";

        return this.http.get(this.githubUrl, {
            params: new HttpParams().set('access_token', ACCESS_TOKEN) });

    }
}