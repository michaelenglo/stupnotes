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
    const dateNow = new Date(1531296059620);
    const dateFinish = new Date(1531296366853);
    return (
        <LogItem timeStart={dateNow} timeFinish={dateFinish}/>
    );
  }
}

export default withStyles(styles)(MainScreen);
