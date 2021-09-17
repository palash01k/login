import React from "react";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
    };
  }

  submit() {
    console.log(this.state);

    if (
      this.state.user === "test@test.com" &&
      this.state.password === "12345"
    ) {
      sessionStorage.setItem("token", "authenticated");

      this.props.history.push({
        pathname: `/dashboard`,
        // state: param
      });
    } else {
      alert("Enter username & password");
      sessionStorage.setItem("token", "");
    }
  }

  render() {
    return (
      <div>
        <TextField
          error
          id="text"
          name="user"
          label="User ID"
          type="text"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          error
          id="password"
          name="password"
          label="Password"
          type="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            this.submit();
          }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default withRouter(Forms);
