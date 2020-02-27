import React from 'react';

export default class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            pages: 0,
            read: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.bookSubmitted(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Author</label>
                    <input className="form-control" type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Pages</label>
                    <input className="form-control" type="number" name="pages" value={this.state.pages} onChange={this.handleChange} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="read" checked={this.state.read} onChange={this.handleChange} />
                    <label className="form-check-label">Read</label>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Book" ></input>
            </form>
        )
    }
}