import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Snackbar.scss';
const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SimpleSnackbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          open={this.props.open}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">We'll be in touch soon!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.props.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
