import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Booklist from './Booklist'

export default class SearchPage extends Component {

    state = {
      searchResults: []
    }

    search(e) {
    BooksAPI.search(e, 20).then((books) => {
            this.setState({ searchResults: books })
        })
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