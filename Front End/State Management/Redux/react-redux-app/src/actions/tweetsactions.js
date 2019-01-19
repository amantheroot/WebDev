import axios from "axios";

export function fetchTweets() {
  let dummy_respone = [
    { id: 1, text: "HOWDy" },
    { id: 2, text: "MY HOMIE" },
    { id: 3, text: "HELP" }
  ];
  return function(dispatch) {
    dispatch({ type: "FETCH_TWEETS" });

    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios
      .get("http://rest.learncode.academy/api/amantheroot/tweets")
      .then(response => {
        dispatch({ type: "FETCH_TWEETS_FULFILLED", payload: dummy_respone });
      })
      .catch(err => {
        dispatch({ type: "FETCH_TWEETS_REJECTED", payload: err });
      });
  };
}

export function addTweet(id, text) {
  return {
    type: "ADD_TWEET",
    payload: {
      id,
      text
    }
  };
}

export function updateTweet(id, text) {
  return {
    type: "UPDATE_TWEET",
    payload: {
      id,
      text
    }
  };
}

export function deleteTweet(id) {
  return { type: "DELETE_TWEET", payload: id };
}
