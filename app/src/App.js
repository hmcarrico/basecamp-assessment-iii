import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <App2/>
        <App3/>
        <App4/>
      </div>

    );
  }
}

class App2 extends Component {
  render() {
    return (
      <div>
        <header >
          <h1> This is the third stretch project</h1>
        </header>
      </div>

    );
  }
}

class App3 extends Component {
  render() {
    return (
      <div>
        <header >
          <h1> Im almost done </h1>
        </header>
      </div>

    );
  }
}

class App4 extends Component {
  render() {
    return (
      <div>
        <header >
          <h1> :) </h1>
        </header>
      </div>

    );
  }
}


export default App;
