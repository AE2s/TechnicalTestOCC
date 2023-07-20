import React, { useState, useEffect } from "react";
import UserIdentity from "../UserIdentity";
import "./users.css";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="container">
      <p className="total">Total users : {data.length}</p>
      <div className="userBlock">
        {data.map((x) => (
          <UserIdentity key={x.id} user={x} />
        ))}
      </div>
    </div>
  );
};

export default Users;
