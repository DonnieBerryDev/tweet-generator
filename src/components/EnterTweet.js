import React, { useState } from "react";

function EnterTweet() {
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default EnterTweet;
