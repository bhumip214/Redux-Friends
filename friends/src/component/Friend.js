import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  // const friend = props.friends.find(friend => {
  //   return `${friend.id}` === props.match.params.id;
  // });
  // if (!friend) {
  //   return <div>Loading Friend information...</div>;
  // }

  return (
    <div className="friend">
      <div className="friend-header">
        <h3>{name}</h3>
        <div className="action-icons">
          <img
            //onClick={e => props.deleteFriend(e, friend.id)}
            src="https://img.icons8.com/color/22/000000/delete-forever.png"
            alt="Delete Icon"
          />
          <img
            src="https://img.icons8.com/color/22/000000/edit.png"
            alt="Edit Icon"
          />
        </div>
      </div>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
