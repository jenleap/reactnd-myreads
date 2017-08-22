import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

export default class Book extends Component {

    moveShelf = (e) => { 
        BooksAPI.update(this.props.book, e);
        this.props.onChange(e, this.props.book)
    }

    render() {

        const { book } = this.props 

        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover"
                        src={book.imageLinks ? book.imageLinks.smallThumbnail :
                        `https://books.google.com/googlebooks/images/no_cover_thumb.gif`}
                        alt={book.title}/>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event) => this.moveShelf(event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? book.authors.map(author => (
                        <p key={author}>{author}</p>)) :
                        <p></p>}
                </div>
            </div>
        )
    }
}