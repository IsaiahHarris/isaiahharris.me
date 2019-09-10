import React, { Component } from 'react';
import './Contact.scss';
import Snackbar from '../Snackbar';
import SendButton from '../SendButton';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    borderRadius: '0px 5px 5px 0px',
    borderLeft: '#00dea6 4px solid',
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f3f3',
    padding: '11px',
    '&::placeholder': {
      color: '#000000',
      fontWeight: '300'
    }
  },
  input: {
    fontSize: '20px',
    width: '100%',
    height: '100%',
    fontFamily: '"Lato", sans-serif',
    lineHeight: '1.3',
    paddingBottom: '10px',
    marginTop: '0px'
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      subjectInput: '',
      messageInput: '',
      nameError: '',
      open: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    let textField = document.getElementById('text-field');

    let screenHeight = window.screen.availHeight;

    if (screenHeight >= 500 && screenHeight <= 600) {
      textField.rows = '4';
    } else if (screenHeight > 600 && screenHeight <= 700) {
      textField.rows = '4';
    } else if (screenHeight > 700 && screenHeight <= 800) {
      textField.rows = '5';
    } else if (screenHeight > 820 && screenHeight <= 1500) {
      textField.rows = '5';
    } else if (screenHeight > 1700) {
      textField.rows = '7';
    } else if (screenHeight < 500) {
      textField.rows = '3';
    }
  }
  handleClick() {
    this.setState({ open: true });
    this.sendMessage();
    setTimeout(this.handleClose, 3500);
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open: false
    });
  }
  sendMessage() {
    const data = {
      name: this.state.nameInput,
      email: this.state.emailInput,
      subject: this.state.subjectInput,
      message: this.state.messageInput
    };
    $.ajax({
      url: 'https://65nn0ge4si.execute-api.us-east-1.amazonaws.com/dev/contact',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'JSON',
      data: JSON.stringify(data)
    });
    this.setState({
      nameInput: '',
      emailInput: '',
      subjectInput: '',
      messageInput: ''
    });
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { nameInput, emailInput, subjectInput, messageInput } = this.state;
    let isEnabled =
      nameInput.length > 0 &&
      emailInput.length > 0 &&
      subjectInput.length > 0 &&
      messageInput.length > 0;
      
    return (
      <div className="contact-container">
        <div className="header-1">
          <div className="title">CONTACT</div>
          <div className="sub-title">Let's get in touch!</div>
        </div>

        <Snackbar open={this.state.open} handleClose={this.handleClose} />
        <div className="form-container">
          <div className="top-inputs">
            <input
              className="name"
              type="text"
              name="nameInput"
              id="name"
              value={this.state.nameInput}
              onChange={this.handleInputChange('nameInput')}
              placeholder="Name"
            />

            <input
              className="email"
              type="text"
              name="emailInput"
              id="email"
              value={this.state.emailInput}
              onChange={this.handleInputChange('emailInput')}
              placeholder="Email"
            />
          </div>
          <div className="subject-input">
            <input
              className="subject"
              type="text"
              name="subjectInput"
              id="subject"
              value={this.state.subjectInput}
              onChange={this.handleInputChange('subjectInput')}
              placeholder="Subject"
            />
          </div>
          <div className="message-container">
            <TextField
              id="text-field"
              multiline={true}
              className={classes.margin}
              name="messageInput"
              rows="2"
              value={this.state.messageInput}
              onChange={this.handleInputChange('messageInput')}
              placeholder="Message"
              InputProps={{
                disableUnderline: true,
                classes: { input: classes.input }
              }}
            />
          </div>
          <SendButton click={this.handleClick} enable={!isEnabled} />
        </div>
        <div className="footer">
          <div className="icon-container">
            <a
              href="https://www.github.com/IsaiahHarris"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/isaiahaharris"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://medium.com/@isaiah.harris.hi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-medium-m" />
            </a>
            <a
              href="https://www.instagram.com/isaiah.h__/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
