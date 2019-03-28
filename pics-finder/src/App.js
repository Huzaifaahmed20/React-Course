import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import unsplashAPI from "./api/unsplash";
import ImageLists from "./Components/ImageLists";

class App extends Component {
  state = { images: [] };
  async onSearchSubmit(term) {
    console.log("TCL: App -> onSearchSubmit -> term", term);
    const response = await unsplashAPI.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term
        }
      }
    );
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />
        <ImageLists images={this.state.images} />
      </div>
    );
  }
}

export default App;
