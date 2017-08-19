import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import SearchPage from './SearchPage'
import ShelfPage from './ShelfPage'

export default class BooksApp extends Component {

  constructor(props){
    super(props)
    this.updateShelf = this.updateShelf.bind(this)
    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf(newShelf, b) {
    let newBook = b
    newBook.shelf = newShelf
    let books = this.state.books.filter(book => 
      book.id !== b.id)
    books.push(b)
    this.setState({ books })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/"
            render={() => (
              <ShelfPage 
                books={this.state.books}
                onChange={this.updateShelf} />
            )}/>
          
          <Route path="/search"
            render={() => (
              <SearchPage 
                onChange={this.updateShelf}/>
            )}/>
      </div>
    )
  }
}


