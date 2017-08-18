import React, { Component } from 'react'

import Book from './Book'

export default class Booklist extends Component {
    render() {
        return (
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
            </ol>
        )
    }
}