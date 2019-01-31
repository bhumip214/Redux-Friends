import React from "react";
import { connect } from "react-redux";

import { getData } from "../store/actions";

import FriendsList from "../component/FriendsList";

class FriendsListView extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <FriendsList
        friends={this.props.friends}
        deleteFriend={this.deleteFriend}
      />
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
)(FriendsListView);
