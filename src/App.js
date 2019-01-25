
import React, { Component } from 'react';  
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import CartList from './components/CartList'
import Spinner from './components/Spinner'


class App extends Component {
  
  state = {
    books: [],
    fetchingBooks: true,
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    this.setState({
      ...this.state,
      books: json,
    fetchingBooks: false,
    })
  }

  render() {
    console.log(this.state)
    // const {books} = this.state
    return (
      <div className="App">
        <SearchBar />

        {this.state.fetchingBooks ? 
          <Spinner /> :
          <BookList  books={this.state.fetchingBooks ? this.state.books : null} />
        }        
        <CartList />
      </div>
    );
  }
}


export default App;
