import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <Link to="userId">User 1</Link>
      <Link to="userId">User 2</Link>
      <Link to="userId">User 3</Link>
      <Outlet />
    </>
  );
};

export default Users;
