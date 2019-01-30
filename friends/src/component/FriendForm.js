import React from "react";

const FriendForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend();
  };

  return (
    <div className="friends-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={props.newfriend.name}
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <input
          type="number"
          name="age"
          value={props.newfriend.age}
          placeholder="Age"
          onChange={props.handleChanges}
        />
        <input
          type="text"
          name="email"
          value={props.newfriend.email}
          placeholder="Email"
          onChange={props.handleChanges}
        />

        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
