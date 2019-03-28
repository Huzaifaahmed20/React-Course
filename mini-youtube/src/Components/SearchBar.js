import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  inputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <div className="ui justified container">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Search Video</label>
              <input
                type="text"
                name="search"
                value={term}
                placeholder="Search ..."
                onChange={this.inputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
