import React, { Component } from "react";

class Background extends Component {
  state = {
    pictures: []
  };
  componentWillMount() {
    fetch("https://randomuser.me/api/?results=500")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map(pic => {
          return (
            <div key={pic.results} className="pics">
              <img src={pic.picture.medium} alt="user" />
            </div>
          );
        });
        this.setState({ pictures });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="background">{this.state.pictures}</div>
      </div>
    );
  }
}

export default Background;
