import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [] 
  };

  componentDidMount() {
    this.updateData()
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.updateData()
    })
  }

  updateData = () => {
    BooksAPI.getAll().then(data => {
            this.setState({
              books: data
            })
    });    
  }

  render() {
    return (
      <div className="app">{}
        <Route exact path="/" render={() => <BookList currentBooks={this.state.books} />} />
      {}
       <Route
        path="/search"
        render={() =>
        <BookSearch updateShelf={this.updateShelf} currentBooks={this.state.books} />}/>
      </div>


    );
  }
}

export default BooksApp
