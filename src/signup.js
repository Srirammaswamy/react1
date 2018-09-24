import React from "react";
import {BrowserRouter, Route, Router, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Login from "./login";
import SignupForm from "./signupform";


const styles = {
  root: {
    flexGrow: 1
  },

  AppBar: {
    minHeight: 80
  },
  grow: {
    flexGrow: 1,
    marginRight: 200
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  card: {
    backgroundColor: "#E8E8E8",
    minWidth: 400,
    maxWidth: 700,
    minHeight: 500
  },
  CardContent: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200
  },
  Headar: {}
};

function Signup(props) {
  const { classes } = props;
  return (
    <BrowserRouter>
    <div className={classes.root}>
      <div className={classes.AppBar}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              Speedometer{" "}
            </Typography>
            <Link to="/login">
            <Button color="inherit">
              Login
            </Button>
            </Link>
            <Button disabled color="inherit">
              SignUp
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className={classes.card}>
          <CardContent>
            <div>
              <Typography
                variant="title"
                color="primary"
                className={classes.grow}
              >
                SignUp <br />{" "}
              </Typography>
              <hr />
            </div>
          </CardContent>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </div>
      <Route path="/login" component={Login} ></Route>
    
    </div>
    </BrowserRouter>
  );
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
