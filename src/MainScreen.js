import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogItem from './LogItem.js';
import LogInput from './LogInput.js';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';


const styles = {
  verticalSpace20: {
    height: '20px',
  },
  container: {
    padding: '20px',
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
    const dateNow = new Date();
    this.props.addLog(this.state.logInputValue, this.state.oldTime, dateNow);
    this.setState({
      logInputValue: '',
      oldTime: dateNow,
    });
  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.container}>
          <Typography variant="display3">Stand-up Logs</Typography>
          <Typography varian="display2">This is intended to help you log what you have done for the day so that you can share it in standup on the next day</Typography>
          <div className={classes.verticalSpace20}/>
          {Object.values(this.props.logs).map(log => 
            <LogItem key={log.timeFinish} label={log.label} timeStart={log.timeStart} timeFinish={log.timeFinish}/>
          )}
          <div className={classes.verticalSpace20}/>
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
  addLog: (label, timeStart, timeFinish) => dispatch({ type: 'ADD_LOG', label, timeStart, timeFinish }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainScreen));
