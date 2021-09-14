import React, { useState } from "react";

export const UserForm = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [status, setStatus] = useState();

  const roomId = 123; // need to have this stored in the state

  const createUser = async (request) => {
    request.room = roomId;
    return fetch("http://localhost:3030/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await createUser({
      username,
    });
    console.log(token.success);
    if (token.success === true) {
      setStatus("Success");
      setToken(token);
    } else {
      setStatus("Failed to create a user with that username. Try another.")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{ status }</div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <input type="submit" />
    </form>
  );
};
