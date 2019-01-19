import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "./actions/useractions";
import { fetchTweets } from "./actions/tweetsactions";

const mapStateToProps = store => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets
  };
};

class ConnectedApp extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
  }
  loadTweets = () => {
    this.props.dispatch(fetchTweets());
  };
  render() {
    console.log(this.props);
    if (this.props.tweets.length === 0) {
      return <button onClick={this.loadTweets}>Load Tweets</button>;
    }
    let tweets = this.props.tweets.map(tweet => (
      <li key={tweet.id}>{tweet.text}</li>
    ));
    return (
      <div>
        <h1>USER</h1>
        <h1>Name: {this.props.user.name}</h1>
        <h1>Age: {this.props.user.age}</h1>
        <h1>TWEETS</h1>
        <ul>{tweets}</ul>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
