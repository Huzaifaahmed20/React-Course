import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search Pics"
              onChange={ev => this.setState({ term: ev.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
