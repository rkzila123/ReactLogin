import React ,{Component} from 'react'
import './css/App.css';

class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
          userName: '',
          password:'',
          errors:[]
        }; 
      }
    
    resettingBoxValue(){
      this.setState({userName : '' , password : ''});
    }
    
    handleNameChange = (event) => {
        this.setState({userName: event.target.value });
        this.clearValidationErr("userName");
      };
    
    handlePassChange = (event) => {
        this.setState({password: event.target.value });
         this.clearValidationErr("password");
      };
    
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
    
    submitLogin(e) {

         let count=0;
      if (this.state.userName === "" ) {
        this.showValidationErr("userName", "Username Cannot be empty!");
        count=count+1;
      }
      if (this.state.password === "" ) {
        this.showValidationErr("password", "Password Cannot be empty!");
        count=count+1;
      }
      if(typeof this.state.userName !== "undefined"){
    
        if(!this.state.userName.match(/^[a-zA-Z]+$/)){
        this.showValidationErr("userName", "Username should be Alphabet!");
        count=count+1;
        }
      }
      if(count===0){
      window.location.href = '/home'
      }
    
    }
    
    render(){
    
    let  userNameErr : null, passwordErr :null ;
    
    for (let err of this.state.errors) {
    
          if (err.elm === "userName") {
            userNameErr = err.msg;
          }
    
          if (err.elm === "password") {
            passwordErr = err.msg;
          }    
    }
    
        return(
      <div className="inner-container">
        <div className="header">
              Login
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
    
        <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
        
        <button type="button" className="login-btn" onClick={this.resettingBoxValue.bind(this)}>Reset</button>
    
      </div> );
      }
    }

export default  Login;