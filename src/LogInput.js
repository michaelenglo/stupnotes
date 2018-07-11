import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';


const styles = {
  container: {
    width: '800px',
    margin: '20px',
    padding: '20px',
    display: 'flex',
  },
  title: {
    flex: 4,
  },
  timeStart: {
    flex: 1,
  },
  timeFinish: {
    flex: 1,
  },
  add: {
    flex: 1,
  },
}

class LogItem extends Component {

  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.onSubmit();
  }

  render() {
    const { classes } = this.props;
    const momentStart = moment(this.props.timeStart);
    const momentFinish = moment(this.props.timeFinish);

    return (
      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.container}>
          <div className={classes.title}>
            <TextField 
              autoFocus
              placeholder="Enter Workitem here..."
              fullWidth
              value={this.props.value}
              onChange={ e => {
                  this.props.onChange(e.target.value);
              }}
            />
          </div>
          <Typography className={classes.timeStart} variant="subheading">{momentStart.format('LTS')}</Typography>
          <Typography className={classes.timeFinish} variant="subheading">{momentFinish.format('LTS')}</Typography>
          <div className={classes.add}>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                ADD
            </Button>
          </div>
        </Paper>
      </form>
    );
  }
}

export default withStyles(styles)(LogItem);
