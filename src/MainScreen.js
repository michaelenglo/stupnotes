import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogItem from './LogItem.js';
import LogInput from './LogInput.js';


const styles = {
  verticalSpace20: {
    height: '20px',
  }
}

class MainScreen extends Component {
  render() {
    const dateNow = new Date(1531296059620);
    const dateFinish = new Date(1531296366853);
    return (
        <div>
          <LogItem timeStart={dateNow} timeFinish={dateFinish}/>
          <div className={this.props.classes.verticalSpace20}/>
          <LogInput timeStart={dateNow} timeFinish={dateFinish} />
        </div>
    );
  }
}

export default withStyles(styles)(MainScreen);
