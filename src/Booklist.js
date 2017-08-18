import React, { Component } from 'react'

import Book from './Book'

export default class Booklist extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.list.map(book => (
                        <li key={book.id}>
                            <Book book={book}   
                                onChange={this.props.onChange}/>
                        </li>
                    ))}
            </ol>
        )
    }
}