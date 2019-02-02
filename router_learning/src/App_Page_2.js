import React, { Component } from 'react';
import logo from './logo.svg';
import './App_Page_1.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Page Two!
            <br/><br/>
            <Link to='/'>Click Me For Page 1</Link>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
