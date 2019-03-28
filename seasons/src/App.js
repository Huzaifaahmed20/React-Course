import React, { Component } from "react";
import SeasonDisplay from "./Components/SeasonDisplay";
import Spinner from "./Components/Spinner";
class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return <div>{errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spinner message='Please accept location request'/>;
  }
}

export default App;
