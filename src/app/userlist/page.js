"use client";
import { useEffect, useState } from "react";

export default function UserList() {
  const [userDeatils, setUserDetails] = useState([]);

  useEffect(async () => {
    let userData = await fetch("https://dummyjson.com/users");
    userData = await userData.json();
    console.log(userData);
    setUserDetails(userData.users);
  }, []);

  return (
    <>
      <h1>User Details</h1>
      {userDeatils.map((item) => (
        <h3>{item.firstName}</h3>
      ))}
    </>
  );
}
