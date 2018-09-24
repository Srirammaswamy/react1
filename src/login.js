import React from "react";
import PropTypes from "prop-types";
import {Route, Router, BrowserRouter, Link, History} from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Signup from "./signup";
import LoginForm from "./loginform";

let hashHistory = Router.hashHistory;

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

function Login(props) {
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
            
            <Button color="inherit" disabled>
              Login
            
            </Button>
            <Link to="/signup">
            <Button color="inherit">
            
              SignUp
            
            </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className={classes.card}>
          <CardContent>
            <br />
            <Typography
              variant="title"
              color="primary"
              className={classes.grow}
            >
              Login <br />
            </Typography>
            <hr />
          </CardContent>
          <CardContent className={classes.CardContent}>
            <LoginForm />{" "}
          </CardContent>
        </Card>
      </div>
      <Route path="/signup" component={Signup}></Route> 
    </div>
    </BrowserRouter>
  );

}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
