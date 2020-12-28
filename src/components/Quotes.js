import React from "react";

const Quotes = (props) => {
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
        <span className="bold">{props.QuoteValue}</span> Quote Tweets
      </h5>
    </div>
  );
};

export default Quotes;
