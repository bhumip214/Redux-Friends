import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;

  return (
    <div className="friend">
      <div className="friend-header">
        <h3>{name}</h3>
        <div className="action-icon">
          <img
            onClick={e => props.deleteFriend(e, id)}
            src="https://img.icons8.com/color/22/000000/delete-forever.png"
            alt="Delete Icon"
          />
        </div>
      </div>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
