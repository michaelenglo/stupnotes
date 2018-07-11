import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';


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
  timeSpent: {
    flex: 1,
  },
}

class LogItem extends Component {
  render() {
    const { classes } = this.props;
    const momentStart = moment(this.props.timeStart);
    const momentFinish = moment(this.props.timeFinish);
    const diff = moment.duration(momentFinish.diff(momentStart));
    let diffStr = '';

    diffStr += diff.hours() !== 0 ? diff.hours() + 'h ' : '';
    diffStr += diff.minutes() !== 0 ? diff.minutes() + 'm ' : '';
    diffStr += diff.seconds() !== 0 ? diff.seconds() + 's ' : '';

    return (
      <Paper className={classes.container}>
        <Typography className={classes.title} variant="title">work item</Typography>
        <Typography className={classes.timeStart} variant="subheading">{momentStart.format('LTS')}</Typography>
        <Typography className={classes.timeFinish} variant="subheading">{momentFinish.format('LTS')}</Typography>
        <Typography className={classes.timeSpent} variant="subheading">({diffStr})</Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(LogItem);
