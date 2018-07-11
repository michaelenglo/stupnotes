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
  render() {
    const { classes } = this.props;
    const momentStart = moment(this.props.timeStart);
    const momentFinish = moment(this.props.timeFinish);

    return (
      <Paper className={classes.container}>
        <div className={classes.title}>
          <TextField 
            autoFocus
            placeholder="Enter Workitem here..."
            fullWidth
          />
        </div>
        <Typography className={classes.timeStart} variant="subheading">{momentStart.format('LTS')}</Typography>
        <Typography className={classes.timeFinish} variant="subheading">{momentFinish.format('LTS')}</Typography>
        <div className={classes.add}>
          <Button variant="contained" color="primary">
              ADD
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(LogItem);
