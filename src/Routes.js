import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header";
import App from "./components/App";



class Routes extends Component {
  render() {
    return (
      <Router>
         <div>
            <Header />
            <App />
         </div>
      </Router>
    );
  }
}

export default Routes;