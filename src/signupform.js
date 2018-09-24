import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("http://localhost:1999/gps/all", {
      method: "GET",
      body: data
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <TextField label="Enter User Name" id="margin-none" />
          <br /> <br />
          <br />
          <TextField label="Enter e-mail" id="margin-none" type="email" />
          <br />
          <br />
          <br />
          <TextField label="Enter Password" id="margin-none" /> <br /> <br />
          <br />
          <Button size="large" color="primary">
            {" "}
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
