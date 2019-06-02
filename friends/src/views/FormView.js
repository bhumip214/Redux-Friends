import React from "react";
import { connect } from "react-redux";

import { addFriend } from "../store/actions/";

import FriendForm from "../component/FriendForm";

class FormView extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };
  handleChanges = e => {
    console.log(e.target.value);
    this.setState({
      friend: { ...this.state.friend, [e.target.name]: e.target.value }
    });
  };

  addNewFriend = () => {
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <FriendForm
        handleChanges={this.handleChanges}
        friend={this.state.friend}
        addNewFriend={this.addNewFriend}
      />
    );
  }
}

const mapStateToProps = state => ({ friends: state.friendsReducer.friends });

export default connect(
  mapStateToProps,
  { addFriend }
)(FormView);
