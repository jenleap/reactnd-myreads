import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Booklist from './Booklist'

export default class SearchPage extends Component {

    state = { searchResults: [] }

    addShelves = (books) => {
        books.forEach((book) => {
            this.props.shelvedBooks.forEach((b) => {
                if (b.id === book.id) {
                    book.shelf = b.shelf
                }
            })
        })
        this.setState({ searchResults: books })
    }

    search = (e) => {
        if (e.length === 0) {
            this.setState({ searchResults: [] })
        } else {
            BooksAPI.search(e, 20)
                .then((books) => {
                    this.addShelves(books)
                })
        }
    }

    render() {
        
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                <input type="text" 
                  placeholder="Search by title or author"
                  onChange={(event) => this.search(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
              <Booklist list={this.state.searchResults}
                onChange={this.props.onChange}/>
            </div>
          </div>
        )
    }
}