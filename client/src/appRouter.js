// CREATING THE MAIN COMPONENT OF THE APP

// DEPENDENCIES
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import authenticate from './modules/authenticate';

// REACT ROUTER
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

// IMPORT PAGE CONTAINERS HERE
import Home from './containers/Home.js';
import Charts from './containers/Charts.js';
import News from './containers/News.js';
import SignUp from './containers/SignUp.js';
import SignIn from './containers/SignIn.js';

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

class appRouter extends Component {
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
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">Welcome to the Block-Train</Link>
              </div>
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">My Dashboard</Link>
                  <Link to="/signout">Sign Out</Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              )}

            </div>

            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            
            <PrivateRoute path="/dashboard" component={Dashboard}/>

            <LoggedOutRoute path="/signin" component={SignIn} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUp}/>
            <LoggedOutRoute path="/charts" component={Charts}/>
            <LoggedOutRoute path="/news" component={News}/>
            
            <Route path="/logout" component={SignOut}/>
          </div>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default appRouter;