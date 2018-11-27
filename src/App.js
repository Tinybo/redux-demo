import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p> Redux Demo </p>
        </header>

        <main>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/music">Music</Link>
            <Link to="/about">About</Link>
          </nav>

          <div className="mainContainer">
            {
              this.props.children
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
