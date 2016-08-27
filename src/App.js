import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world ...
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
