import React, { Component } from "react";
import FriendsList from "./component/FriendsList";
import FriendForm from "./component/FriendForm";
import { connect } from "react-redux";
import { getData } from "./actions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newfriend: {
        id: Date.now(),
        name: "",
        age: "",
        email: ""
      }
    };
  }
  componentDidMount() {
    this.props.getData();
  }
  handleChanges = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addNewFriend(this.state.newFriend);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>

          <FriendsList friends={this.props.friends} />
          <FriendForm
            addFriend={this.addFriend}
            handleChanges={this.handleChanges}
            newfriend={this.state.newfriend}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  error: state.friendsReducer.error,
  fetching: state.friendsReducer.fetching
});

export default connect(
  mapStateToProps,
  { getData }
)(App);
