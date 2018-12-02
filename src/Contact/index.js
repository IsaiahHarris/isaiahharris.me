import React, { Component } from 'react';
import './Contact.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      nameError: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
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
    const { name } = this.state;
    let isEnabled = name.length > 0;

    return (
      <div className="contact-container">
        <div className="header">
          <div className="title">CONTACT</div>
          <div className="sub-title">Let's get in touch!</div>
        </div>
        <div className="form-container">
          <div className="top-inputs">
            {!isEnabled && this.state.nameError ? (
              <div className="error">{this.state.nameError}</div>
            ) : (
              ''
            )}
            <div className="name-input">
              <input
                className="name"
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Name"
              />
            </div>

            <div className="email-input">
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
          </div>
          <div className="subject-input">
            <input
              className="subject"
              type="text"
              name="subject"
              id="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              placeholder="Subject"
            />
          </div>
          <div className="message-input">
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
        </div>
        <div className="send-container">
          <div className="send" onClick={this.sendMessage}>
            <div className="s">Send</div>
          </div>
          <div className="send" onClick={this.sendMessage}>
            <div className="se">Send</div>
          </div>
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
            <Link to="/contact">
              <i className="fas fa-envelope" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
