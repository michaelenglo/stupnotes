import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogItem from './LogItem.js';
import LogInput from './LogInput.js';
import { connect } from 'react-redux';


const styles = {
  verticalSpace20: {
    height: '20px',
  }
}

class MainScreen extends Component {

  constructor(props) {
    super(props);

    const dateNow = new Date();

    this.state = {
      logInputValue: '',
      oldTime: dateNow,
    };

    this.handleLogInputChange = this.handleLogInputChange.bind(this);
    this.handleLogInputSubmit = this.handleLogInputSubmit.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  handleLogInputChange(logInputValue) {
    this.setState({ logInputValue });
  }

  handleLogInputSubmit() {
    console.log(new Date());
  }

  render() {
    const dateNow = new Date(1531296059620);
    const dateFinish = new Date(1531296366853);
    return (
        <div>
          {Object.values(this.props.logs).map(log => 
            <LogItem label={log.label} timeStart={log.timeStart} timeFinish={log.timeFinish}/>
          )}
          <div className={this.props.classes.verticalSpace20}/>
          <LogInput
            value={this.state.logInputValue}
            onChange={this.handleLogInputChange}
            onSubmit={this.handleLogInputSubmit}
            timeStart={this.state.oldTime}
            timeFinish={new Date()}
          />
        </div>
    );
  }
}
const mapStateToProps = state => ({
  logs: state.logs,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainScreen));
