import React, { Component } from 'react';

var divStyle = {
  background: "#1abc9c",
  padding: "40px",
  margin: "20px",
  textAlign: "center",
  color: "white" ,
  border: "2px solid #417cef"
  
};

class Header extends Component {
    render() {
      return (
        <div style={divStyle}><h1>Header</h1></div>
      
      );
    }
  }

  export default Header;