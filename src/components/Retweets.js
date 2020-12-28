import React from "react";

const Retweets = (props) => {
  return (
    <div className="tweet_data__info">
      <h5
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
        <span className="bold">{props.RetweetValue}</span> Retweets
      </h5>
    </div>
  );
};

export default Retweets;
