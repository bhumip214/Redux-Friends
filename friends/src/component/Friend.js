import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;

  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
