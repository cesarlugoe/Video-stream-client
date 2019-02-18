import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PageOne from "./pages/PageOne";
import PageTwo from './pages/PageTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </div>
    );
  }
}

export default App;
