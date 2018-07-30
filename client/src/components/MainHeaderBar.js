import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import './MainHeaderBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null,
      left: true
    }
  }
    toggleDrawer (side, open) {
        console.log('hello', open);
        this.setState({
            [side]: open,
        });
    }
  render(){
    const { classes } = this.props;
    return (
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Blocktrain <span className="nav__active-page"> <i className="fas fa-caret-right"></i>{this.props.activeLayout.toUpperCase()}</span>
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
