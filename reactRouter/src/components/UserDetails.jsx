import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  //   const userId = params.userId;
  return <h1>Details About User {userId} </h1>;
};

export default UserDetails;
