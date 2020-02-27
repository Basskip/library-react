import React from 'react';
import BookRow from './BookRow';

class Table extends React.Component {

    render() {
        const bookList = this.props.books.map((book, index) =>
            <BookRow book={book} key={index} onDelete={() => this.props.handleDelete(index)} onToggle={() => this.props.handleToggle(index)}  />);
        return (
            <table className="table">
                <caption>My Library</caption>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Pages</td>
                        <td>Read</td>
                        <td>Status</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {bookList}
                </tbody>
            </table>
        )
    }
}

export default Table;