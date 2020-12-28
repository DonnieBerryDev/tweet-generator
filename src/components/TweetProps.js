import React from "react";

class TweetProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.isVerified}</h1>
      </div>
    );
  }
}

export default TweetProps;
