import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friend-list">
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            id={friend.id}
            {...props}
            friend={friend}
            deleteFriend={props.deleteFriend}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
