import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './header';
import './css/App.css';


class Home extends Component {

    logoutUser() {
  
        window.location.href = '/'
       
    }

    render(){
        return(
            <Router>
                <div>
                    <Header />
                     <a href="#" onClick={() => {this.logoutUser().bind(this)}} style={{float : 'right', paddingRight : '40px' , color: '#FFF' , textDecoration: 'none'}}>Logout</a> 
                     <ul className="ul">
                        <li>
                            <Link to="/home" className="link" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>
                     </ul>
                     <ul className="ul">
                        <li>
                            <Link to="/about" className="link" style={{ textDecoration: 'none' }}>About</Link>
                        </li>
                        </ul>
                     {/* <ul className="ul">
                        <li>
                            <Link to="/topics" className="link" style={{ textDecoration: 'none' }}>Topics</Link>
                        </li>
                     </ul> */}
                     <Route path="/about" component={About} />
                    {/* <Route path="/topics" component={Topics} /> */}
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

  // function Topics({ match }) {
  //   return (
  //     <div>
  //       <h2>Topics</h2>
  //       <ul>
  //         <li>
  //           <Link to={`${match.url}/rendering`} className="link" style={{ textDecoration: 'none' }}>Rendering with React</Link>
  //         </li>
  //         <li>
  //           <Link to={`${match.url}/components`} className="link" style={{ textDecoration: 'none' }} >Components</Link>
  //         </li>
  //         <li>
  //           <Link to={`${match.url}/props-v-state`}className="link" style={{ textDecoration: 'none' }} >Props v. State</Link>
  //         </li>
  //       </ul>
  
  //       <Route path={`${match.path}/:topicId`} component={Topic} />
  //       <Route
  //         exact
  //         path={match.path}
  //         render={() => <h3>Please select a topic.</h3>}
  //       />
  //     </div>
  //   );
  // }

  // function Topic({ match }) {
  //   return (
  //     <div>
  //       <h3>{match.params.topicId}</h3>
  //     </div>
  //   );
  // }
  

export default Home;