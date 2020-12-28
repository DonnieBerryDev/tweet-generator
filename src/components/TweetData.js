import React from "react";

import Retweets from "./Retweets";
import Quotes from "./Quotes";
import Likes from "./Likes";

const TweetData = (props) => {
  return (
    <div className="tweet_data">
      <Retweets
        RetweetValue={props.RetweetValue}
        selectedTheme={props.selectedTheme}
      />
      <Quotes
        QuoteValue={props.QuoteValue}
        selectedTheme={props.selectedTheme}
      />
      <Likes
        LikesValue={props.LikesValue}
        selectedTheme={props.selectedTheme}
      />
    </div>
  );
};

export default TweetData;
