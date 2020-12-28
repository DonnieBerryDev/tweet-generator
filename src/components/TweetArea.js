import React, { useState } from "react";
import Tweet from "./Tweet";
import TweetUsername from "./TweetUsername";
import TweetTitle from "./TweetTitle";
import TweetTime from "./TweetTime";
import TweetData from "./TweetData";
import TweetProps from "./TweetProps";

const TweetArea = (props) => {
  const [TweetValue, setTweetValue] = useState("");
  const TweetHandler = (e) => {
    setTweetValue(e.target.value);
  };

  const [UsernameValue, setUsernameValue] = useState("");
  const UsernameHandler = (e) => {
    setUsernameValue(e.target.value);
  };

  const [TitleValue, setTitleValue] = useState("");
  const TitleHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const [RetweetValue, setRetweetValue] = useState("");
  const RetweetHandler = (e) => {
    setRetweetValue(e.target.value);
  };

  const [QuoteValue, setQuoteValue] = useState("");
  const QuoteHandler = (e) => {
    setQuoteValue(e.target.value);
  };

  const [LikesValue, setLikesValue] = useState("");
  const LikesHandler = (e) => {
    setLikesValue(e.target.value);
  };

  const [isVerified, setVerified] = useState(false);
  const handleVerified = () => {
    setVerified(isVerified ? false : true);
    console.log(isVerified);
  };

  return (
    <div class="tweetArea" style={{ background: props.selectedTheme }}>
      <div class="innerContainer">
        <div className="inputArea">
          <div class="tweetInput_tweet">
            <h5>Enter your Tweet</h5>
            <input type="text" class="onTweet" onChange={TweetHandler} />
          </div>
          <div class="tweetInput_username">
            <h5>What is the username</h5>
            <input type="text" onChange={UsernameHandler} />
          </div>
          <div class="tweetInput_title">
            <h5>What is the title</h5>
            <input type="text" onChange={TitleHandler} />
          </div>

          <div class="tweetInput_data">
            <div class="tweetInput_retweet">
              <h5>What is the retweet count</h5>
              <input type="text" onChange={RetweetHandler} />
            </div>

            <div class="tweetInput_quotes">
              <h5>What is the quote count</h5>
              <input type="text" onChange={QuoteHandler} />
            </div>

            <div class="tweetInput_likes">
              <h5>What is the like count</h5>
              <input type="text" onChange={LikesHandler} />
            </div>
          </div>
        </div>

        <div class="tweetProps">
          <div
            class="tweetProps_verified"
            onClick={() => {
              setVerified((prev) => !prev);
            }}
          >
            <input
              type="checkbox"
              name="isVerified"
              onChange={handleVerified}
              checked={isVerified}
            />
            <h5>Verified?</h5>
          </div>
        </div>

        <TweetProps isVerified={isVerified} />
        <div
          class="tweet"
          id="tweetHere"
          style={{
            background:
              props.selectedTheme === "light"
                ? "#fff"
                : props.selectedTheme === "dim"
                ? "#15202b"
                : props.selectedTheme === "dark"
                ? "#000"
                : "",
          }}
        >
          <div class="tweet_header">
            <div class="tweet_avatar">
              <img
                src="https://via.placeholder.com/50"
                alt="avatar"
                class="avatar"
              />
            </div>

            <div class="tweet_person">
              <TweetTitle
                TitleValue={TitleValue}
                selectedTheme={props.selectedTheme}
                isVerified={isVerified}
              />
              <TweetUsername UsernameValue={UsernameValue} />
            </div>
          </div>

          <Tweet TweetValue={TweetValue} selectedTheme={props.selectedTheme} />
          <TweetTime />
          <TweetData
            RetweetValue={RetweetValue}
            LikesValue={LikesValue}
            QuoteValue={QuoteValue}
            selectedTheme={props.selectedTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetArea;
