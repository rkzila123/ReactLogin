import React, { Component } from 'react';
import './App.css';

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
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
     </div>
 
      </div>
    );
  }
}


class LoginBox extends React.Component {

constructor(props) {
    super(props); 
    this.state = {
      userName: null,
      password:null
    }; 
  }

resettingBoxValue(){
  this.setState({userName : '' , password : ''});
}

handleNameChange = (event) => {
    this.setState({userName: event.target.value });
  };

handlePassChange = (event) => {
    this.setState({password: event.target.value });
  };

submitLogin(e) {}

render(){
    return(
  <div className="inner-container">
    <div className="header">
          Login
    </div>

    <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="login-input" value={this.state.userName} onChange={this.handleNameChange}
              placeholder="Username"/>
          </div>
    </div>

     <div className="box">
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="login-input" value={this.state.password} onChange={this.handlePassChange}
              placeholder="Password"/>
          </div>
    </div>

    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
    
    <button type="button" className="login-btn" onClick={this.resettingBoxValue.bind(this)}>Reset</button>

  </div> );
  }
}



class RegisterBox extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password:null,
      email:null ,
      errors:[]
    };
  }

resettingBoxValue(){
  this.setState({userName : '' , password : '' , email: ''});
}

handleNameChange = (event) => {
    this.setState({userName: event.target.value });
    this.clearValidationErr("userName");
  };

handlePassChange = (event) => {
    this.setState({password: event.target.value });
    this.clearValidationErr("password");
  };

handleEmailChange = (event) => {
    this.setState({ email : event.target.value });
    this.clearValidationErr("email");
  };

submitRegister(e) {
alert(this.state.userName);
if (this.state.userName == "" || this.state.userName == null) {
    this.showValidationErr("userName", "Username Cannot be empty!");
  }
  
  if (this.state.password == "" || this.state.password == null) {
    this.showValidationErr("password", "Password Cannot be empty!");
  }

  if (this.state.email == "" || this.state.email == null) {
    this.showValidationErr("email", "Email Cannot be empty!");
  }

}


showValidationErr(elm, msg) {
this.setState((prevState) => ({
  errors:[
    prevState.errors ,{elm, msg}
  ]

}));
}

clearValidationErr(elm) {
this.setState((prevState) => {
let arr=[];

for( let err of prevState.errors){
  if(elm != err.elm){
    arr.push(err);
  }
}
return {errors : arr};
});
}

render(){

let  userNameErr : null, passwordErr :null, emailErr :null ;

for (let err of this.state.errors) {

      if (err.elm == "userName") {
        userNameErr = err.msg;
      }

      if (err.elm == "password") {
        passwordErr = err.msg;
      }

      if (err.elm == "email") {
        emailErr = err.msg;
      }
}

    return(

  <div className="inner-container">
    <div className="header">
          Register
    </div>

    <div className="box">
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName" className="login-input" value={this.state.userName} onChange={this.handleNameChange}
              placeholder="Username"/>
            <small className="danger-error">{userNameErr ? userNameErr : ""}
            </small>
          </div>
    </div>

    <div className="box">
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="login-input" value={this.state.password} onChange={this.handlePassChange}
              placeholder="Password"/>
            <small className="danger-error">{passwordErr ? passwordErr : ""}
            </small>            
          </div>
    </div>

    <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="login-input" value={this.state.email} onChange={this.handleEmailChange}
              placeholder="Email"/>
            <small className="danger-error">{emailErr ? emailErr : ""}
            </small>  
          </div>
    </div>

    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

     <button type="button" className="login-btn" onClick={this.resettingBoxValue.bind(this)}>Reset</button>

  </div>

    );
  }
}


export default App;
