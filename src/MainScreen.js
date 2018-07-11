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

  constructor(props) {
    super(props);

    this.state = {
      logInputValue: '',
    };

    this.handleLogInputChange = this.handleLogInputChange.bind(this);
    this.handleLogInputSubmit = this.handleLogInputSubmit.bind(this);
  }

  handleLogInputChange(logInputValue) {
    this.setState({ logInputValue });
  }

  handleLogInputSubmit() {
    alert(this.state.logInputValue);
  }

  render() {
    const dateNow = new Date(1531296059620);
    const dateFinish = new Date(1531296366853);
    return (
        <div>
          <LogItem timeStart={dateNow} timeFinish={dateFinish}/>
          <div className={this.props.classes.verticalSpace20}/>
          <LogInput
            value={this.state.logInputValue}
            onChange={this.handleLogInputChange}
            onSubmit={this.handleLogInputSubmit}
            timeStart={dateNow}
            timeFinish={dateFinish}
          />
        </div>
    );
  }
}

export default withStyles(styles)(MainScreen);
