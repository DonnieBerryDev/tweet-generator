import React from "react";

const Tweet = (props) => {
  return (
    <div class="tweet_tweet">
      <p
        style={{
          color:
            props.selectedTheme === "light"
              ? "#000"
              : props.selectedTheme === "dim"
              ? "#fff"
              : props.selectedTheme === "dark"
              ? "#fff"
              : "",
        }}
      >
        {props.TweetValue}
      </p>
    </div>
  );
};

export default Tweet;
