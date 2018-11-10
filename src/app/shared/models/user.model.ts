export class UserModel {
    constructor(_username : string, _imageUrl : string) { 
        this.username = _username;
        this.imageUrl = _imageUrl
    }
    
    username : string;
    imageUrl : string;
}