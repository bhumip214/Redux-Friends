import React from "react";

const FriendForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.addNewFriend();
  };

  return (
    <div className="friends-form">
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={props.friend.name}
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <input
          type="number"
          name="age"
          value={props.friend.age}
          placeholder="Age"
          onChange={props.handleChanges}
        />
        <input
          type="text"
          name="email"
          value={props.friend.email}
          placeholder="Email"
          onChange={props.handleChanges}
        />

        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
