import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogItem from './LogItem.js';

const styles = {
  container: {
    width: '40%',
    margin: '20px',
  },
}

class MainScreen extends Component {
  render() {
    return (
        <LogItem />
    );
  }
}

export default withStyles(styles)(MainScreen);
