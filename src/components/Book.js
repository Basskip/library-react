export default class Book {
    constructor(obj) {
        this.title = obj.title;
        this.author = obj.author;
        this.pages = obj.pages;
        this.read = obj.read;
    }

    info() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readString()
    }

    readString() {
        if (this.read) {
            return "read"
        } else {
            return "not yet read"
        }
    }

    toggleRead() {
        this.read = !this.read;
    }
}