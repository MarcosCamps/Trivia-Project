import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './components/login';
import Game from './components/game';
import Settings from './components/settings';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />

          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/game" component={ Game } />
            <Route path="/settings" component={ Settings } />
          </Switch>

        </header>
      </div>
    );
  }
}

export default App;
