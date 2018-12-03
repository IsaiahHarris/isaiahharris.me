import React, { Component } from 'react';
import './Contact.scss';
import Snackbar from '../Snackbar';
import SendButton from '../SendButton';
import $ from 'jquery';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      nameError: '',
      open: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick() {
    this.setState({ open: true });
    this.sendMessage();
  }

  handleClose(event, reason) {
    console.log('hi');
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open: false
    });
  }
  sendMessage() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    $.ajax({
      url: 'https://65nn0ge4si.execute-api.us-east-1.amazonaws.com/dev/contact',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'JSON',
      data: JSON.stringify(data)
    });
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  handleInputChange(event) {
    switch (event.target.id) {
      case 'name':
        this.setState({ name: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'subject':
        this.setState({ subject: event.target.value });
        break;
      case 'message':
        this.setState({ message: event.target.value });
        break;
      default:
        break;
    }
    if (event.target.name === 'name' && !this.state.name) {
      let nameError = 'Name Is Required';
      this.setState({
        nameError: nameError
      });
    }
  }
  render() {
    const { name, email, subject, message } = this.state;
    let isEnabled =
      name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      message.length > 0;
    return (
      <div className="contact-container">
        <div className="header">
          <div className="title">CONTACT</div>
          <div className="sub-title">Let's get in touch!</div>
        </div>

        <Snackbar open={this.state.open} handleClose={this.handleClose} />
        <div className="form-container">
          <div className="top-inputs">
            <input
              className="name"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />

            <input
              className="email"
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </div>

          <input
            className="subject"
            type="text"
            name="subject"
            id="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
            placeholder="Subject"
          />

          <textarea
            className="message"
            type="text"
            name="message"
            id="message"
            value={this.state.message}
            onChange={this.handleInputChange}
            placeholder="Message"
          />
        </div>
        <div className="send-container">
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
              href="https://linkedin.com/in/isaiah-a-harris"
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

export default Contact;
