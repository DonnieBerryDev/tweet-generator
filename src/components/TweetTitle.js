import React from "react";

const TweetTitle = (props) => {
  return (
    <div class="tweet_title">
      <h3
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
        {props.TitleValue}
      </h3>
      <div class="tweet_title__img">
        <img src={props.isVerified ? "images/verified-light.png" : ""} />
      </div>
    </div>
  );
};

export default TweetTitle;
