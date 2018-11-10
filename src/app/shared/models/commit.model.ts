export class Commit {
    constructor(messages : Array<String>, repo : string, createdAt : string) {
        this.messages = messages;
        this.repo = repo;
        this.createdAt = createdAt;
    }
    messages : Array<String>;
    repo : string;
    createdAt : string;
}