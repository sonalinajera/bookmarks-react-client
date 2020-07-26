import React, { Component } from 'react';
import './App.css';

import AddBookmark from './AddBookmark/addBookmark'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddBookmark />
      </div>
    );
  }
}

export default App;
