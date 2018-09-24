import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleEmailChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
   // const form = event.target.value;
   // const data = new FormData(form);
   // console.log(form);
     const data = {
       username: this.state.username,
       password: this.state.password
     };

     console.log(this.state.username);
     console.log(this.state.password);
    // alert(data);

    var myurl = `http://localhost:1999/gps/adduser?username=${this.state.username}&password=${this.state.password}`;

     fetch((myurl), {
       method: "GET",
       headers: data
     }).then(response => {
       if(response.status>=200 && response.status<300) {
         console.log(response);
         console.log(response.body);
         console.log(response.statusText);
         console.log(response.status);
         console.log(response.text());
         return response;
//       window.location.reload();
       }
       else {
         console.log('Error');
       }
     }).then(data => this.setState({ data })).catch(err => err);
     console.log(data);

     const dUrl = "http://www.domain.com";


  // ALTERNATIVE METHOD

  function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

//  loadData(myurl);
  
  

/*
//function createBlogPost(data) {
  return fetch('http://localhost:1999/gps/adduser', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
      if (response.status >= 200 && response.status < 300) {
          return response;
          console.log(response);
          window.location.reload();
        } else {
         console.log('Somthing happened wrong');
        }
  }).catch(err => err);
*/
}


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <TextField label="Enter User Name" className="margin-none" id="username" onChange={this.handleEmailChange}/> <br /> <br />
          <br />
          <TextField label="Enter Password" className="margin-none" id="password" onChange={this.handlePasswordChange}/>
          <br /> <br /> <br />
          <br />
          <Button size="large" color="primary" onClick={this.handleSubmit}>
            {" "}
            Login{" "}
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
