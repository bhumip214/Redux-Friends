import React from "react";
import Friend from "./Friend";
const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <div className="friend-list">
            <Friend key={friend.id} friend={friend} />
          </div>
        );
      })}
    </ul>
  );
};

export default FriendsList;
