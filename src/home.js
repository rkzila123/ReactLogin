import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/home.css' ;

class Home extends Component {

    logoutUser() {
  
        window.location.href = '/'
       
    }

    render(){
        return(
            <Router>
            
            
                <div>
                 <a href="#" onClick={() => {this.logoutUser().bind(this)}} style={{float : 'right', paddingRight : '2px'}}>Logout</a> 
                     <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                     </ul>

                    <hr />
      
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
               
            </Router>
        );
    }

}

 

function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }

  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
  

export default Home;