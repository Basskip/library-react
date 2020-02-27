import React from 'react';

export default class BookRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.pages} pages</td>
                <td>{this.props.book.readString()}</td>
                <td>
                    <button onClick={this.props.onToggle}>Toggle</button>
                </td>
                <td>
                    <button onClick={this.props.onDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}