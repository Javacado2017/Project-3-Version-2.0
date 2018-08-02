import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Button, Typography } from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'



import Auth from './modules/Auth';
import Dashboard from './containers/Dashboard.js';
import Home from './containers/Home.js';
import Charts from './containers/Charts.js';
import News from './containers/News.js';
import SignIn from './containers/SignIn.js';
import SignOut from './containers/SignOut.js';
import SignUp from './containers/SignUp.js';


injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            <div>
        <Toolbar>
          <Typography variant="title" color="inherit" >
            <Link to="/">Block Train</Link>
          </Typography>
            <div>
            </div>
          {this.state.authenticated ? (
            <div>
            <Button color="inherit"> <Link to="/dashboard">My Dashboard</Link></Button>
            <Button color="inherit"> <Link to="/charts"> My Charts</Link></Button>
            <Button color="inherit"> <Link to="/news">My News</Link></Button>
            <Button color="inherit"> <Link to="/signout">Sign Out</Link></Button>  
            </div>
          ) : (
            <div>
            <Button color="inherit"> <Link to="/signup">Sign Up</Link></Button>
            <Button color="inherit"> <Link to="/signin">Sign In</Link></Button>
      
            </div>
          )}
           

        </Toolbar>

        </div>
            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <LoggedOutRoute path="/signin" component={SignIn} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUp}/>
            <PropsRoute path="/charts" component={Charts}/>
            <PropsRoute path="/news" component={News}/>
            <Route path="/signout" component={SignOut}/>
          </div>

        </Router>
      </MuiThemeProvider>
    );
  }
}



export default App;
