import React from "react";

const TweetUsername = (props) => {
  return (
    <div class="tweet_username">
      <h4>@{props.UsernameValue}</h4>
    </div>
  );
};

export default TweetUsername;
