import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Booklist from './Booklist'

export default class ShelfPage extends Component {

    createShelves = () => {
        const shelves = [
        { 
            title: "Currently Reading",
            books: this.props.books.filter( book => 
                book.shelf === "currentlyReading")
        },
        { 
            title: "Want to Read",
            books: this.props.books.filter( book => 
                book.shelf === "wantToRead")
        },
        { 
            title: "Read",
            books: this.props.books.filter( book => 
                book.shelf === "read")
        }
        ]
        return shelves
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    {this.createShelves().map( shelf => (
                        <div className="bookshelf" key={shelf.title}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <Booklist list={shelf.books}
                                    onChange={this.props.onChange}/>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}