import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={this.props.profile_picture} />
        <h3>{this.props.email}</h3>
        <h4>{this.props.email}</h4>
      </div>
    );
  }
}

export default Contact;
// Your <Contact> component will render a single contact.
// It should contain an outer
// <div> with a class of contact and include an
// <img> for the profile picture,
// <h3> for the name, and
// <h4> for the email address.
// Pass the details in to pass test
