import React ,{Component} from 'react'
import './css/App.css';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          password:'',
          email:'' ,
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
    
        this.setState({pwdState: "weak"});
      if (event.target.value.length > 8) {
        this.setState({pwdState: "medium"});
      } if (event.target.value.length > 12) {
        this.setState({pwdState: "strong"});
      }
      };
    
    handleEmailChange = (event) => {
        this.setState({ email : event.target.value });
        this.clearValidationErr("email");
      };
    
    submitRegister(e) {
      if (this.state.userName === "" ) {
        this.showValidationErr("userName", "Username Cannot be empty!");
      }
      
      if (this.state.password === "" ) {
        this.showValidationErr("password", "Password Cannot be empty!");
      }
    
      if (this.state.email === "" ) {
        this.showValidationErr("email", "Email Cannot be empty!");
      }
    
      window.location.href = '/'
    }
    
    
    showValidationErr(elm, msg) {
    this.setState((prevState) => ({errors:[...prevState.errors ,{elm, msg} ]}));
    }
    
    clearValidationErr(elm) {
    this.setState((prevState) => {
    let arr=[];
    
    for( let err of prevState.errors){
      if(elm !== err.elm){
        arr.push(err);
      }
    }
    return {errors : arr};
    });
    }
    
    
    render(){
    
    
      let pwdWeak = false,
        pwdMedium = false,
        pwdStrong = false;
    
        if (this.state.pwdState === "weak") {
        pwdWeak = true;
      } else if (this.state.pwdState === "medium") {
        pwdWeak = true;
        pwdMedium = true;
      } else if (this.state.pwdState === "strong") {
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
      }
    
    let  userNameErr : null, passwordErr :null, emailErr :null ;
    
    for (let err of this.state.errors) {
    
          if (err.elm === "userName") {
            userNameErr = err.msg;
          }
    
          if (err.elm === "password") {
            passwordErr = err.msg;
          }
    
          if (err.elm === "email") {
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
    
        {this.state.password && <div className="password-state">
        <div className={"pwd pwd-weak " + (pwdWeak ? "show": "")}></div>
        <div className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
        <div className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>
        </div>}
    
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
    
    export default Register;