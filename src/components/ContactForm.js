import React, { Component } from "react";
import { FormGroup, TextField, Button } from "@material-ui/core";
import EmailPro from "../components/EmailPro";

class ContactForm extends Component {
  state = {
    message: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {};

  render() {
    return (
      <FormGroup>
        <TextField
          autoFocus
          id="outlined-basic"
          label="Message"
          variant="outlined"
          name="message"
          onChange={this.handleInputChange}
          value={this.state.message}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <EmailPro email={this.props.email} message={this.state.message} />
      </FormGroup>
    );
  }
}

export default ContactForm;
