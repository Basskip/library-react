import React from 'react';
import Book from './Book';
import Table from './Table';
import BookForm from './BookForm';

export default class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }

        this.saveLibrary = this.saveLibrary.bind(this);
    }

    addBook = (book) => {
        const currentBooks = this.state.books;
        this.setState({
            books: currentBooks.concat([new Book(book)]),
        })
    }

    handleDelete = (index) => {
        const currentBooks = this.state.books;
        currentBooks.splice(index, 1);
        this.setState({
            books: currentBooks,
        });
    }

    handleToggle = (index) => {

        const currentBooks = this.state.books;
        currentBooks[index].toggleRead();

        this.setState({
            books: currentBooks,
        })
    }

    saveLibrary() {
        localStorage.library = JSON.stringify(this.state.books);
    }

    loadLibrary() {
        let items = localStorage.getItem('library');
        if (items) {
            this.setState({
                books: this.parseLibrary(JSON.parse(items)),
            })
        }
    }

    parseLibrary(json) {
        let books = [];

        for (let index = 0; index < json.length; index++) {
            const book = json[index];
            books.push(new Book(book));
        }
        return books;
    }

    componentDidMount() {
        this.loadLibrary();

        window.addEventListener("beforeunload", this.saveLibrary);
    }

    componentWillUnmount() {
        this.saveLibrary();
    }

    render() {
        return (
            <div className="container">
                <Table books={this.state.books} handleDelete={this.handleDelete} handleToggle={this.handleToggle}></Table>
                <BookForm bookSubmitted={this.addBook} ></BookForm>
            </div>
        )
    }
}