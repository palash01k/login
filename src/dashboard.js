import React from "react";
import { withRouter } from "react-router";

class Dashboard extends React.Component {
  // constructor() {}
  render() {
    let token = sessionStorage.getItem("token");
    console.log("token", token);
    if (!token) {
      this.props.history.push({
        pathname: `/`,
      });
    } else {
      return <h1>You have Successfully Logged In</h1>;
    }

    return <div></div>;
  }
}

export default withRouter(Dashboard);
