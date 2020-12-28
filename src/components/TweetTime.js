import React from "react";

const TweetTime = () => {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " · " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return (
    <div class="tweet_time">
      <p>{datetime} · Twitter for iPhone</p>
    </div>
  );
};
export default TweetTime;
