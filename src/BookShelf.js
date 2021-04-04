import React from 'react'
import PropTypes from 'prop-types'


class BookShelf extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	render() {
		return <div className="bookshelf">
	               <h2 className="bookshelf-title">{this.props.title}</h2>
                   <div className="bookshelf-books">
	                   <ol className="books-grid">
	                   {this.props.books.map((book) =>  
		                       <BookList key={book.id}
			                         onUpdateShelf={this.props.updateShelf}
			                         bookItem={book}
			                    />
	                   	)}
	                   </ol>
	               </div>
               </div>
	}
}

export default BookShelf
