import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';



const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  )

ReactDOM.render(routing , document.getElementById('root'));
