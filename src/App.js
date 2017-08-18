import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import SearchPage from './SearchPage'
import ShelfPage from './ShelfPage'

export default class BooksApp extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/"
            render={() => (
              <ShelfPage />
            )}/>
          
          <Route path="/search"
            render={() => (
              <SearchPage />
            )}/>
      </div>
    )
  }
}


