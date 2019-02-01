import React, { Component } from "react";
import FriendsListView from "./views/FriendsListView";
import FormView from "./views/FormView";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFormOpen: false
    };
  }

  render() {
    if (this.props.fetching) {
      return <span>Loading...</span>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>FRIENDS </h1>
          <div>
            <img
              onClick={() =>
                this.setState({
                  isFormOpen: !this.state.isFormOpen
                })
              }
              className="add-icon"
              src="https://img.icons8.com/color/48/000000/plus.png"
              alt="Add Icon"
            />
          </div>
        </header>
        {this.state.isFormOpen && <FormView friend={this.state.friend} />}
        <FriendsListView />
      </div>
    );
  }
}

export default App;
