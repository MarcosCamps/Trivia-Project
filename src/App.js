import React from 'react';
import logo from './trivia.png';
import './App.css';
import Login from './Components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            <Login />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
