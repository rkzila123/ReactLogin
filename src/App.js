import React, { Component } from 'react';
import './css/App.css';
import Login from './Login' ;
import Register from './Register' ;
import Header from './header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

showLoginBox(){
  this.setState({isLoginOpen : true , isRegisterOpen : false});
}

showRegisterBox(){
  this.setState({isRegisterOpen : true , isLoginOpen : false});
}

  render() {

    return (
      <div className="root-container">
      <Header />
     <div className="box-controller">
       <div className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showLoginBox
         .bind(this)}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
         onClick={this
         .showRegisterBox
         .bind(this)}>
         Register
       </div>
     </div>

      <div className="box-container">
      {this.state.isLoginOpen && <Login/>}
      {this.state.isRegisterOpen && <Register/>}
     </div>
 
      </div>
    );
  }
}


export default App;
