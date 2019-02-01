import React from "react";
import { connect } from "react-redux";
import { getData, deleteFriend } from "../store/actions";
import FriendsList from "../component/FriendsList";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  };

  render() {
    console.log(this.props);
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
  { getData, deleteFriend }
)(FriendsListView);
