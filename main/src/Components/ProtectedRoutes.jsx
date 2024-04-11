import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/slices/action";

function ProtectedRoutes({ children }) {
  const allowedUsers = ["admin", "user", "manager"];
  const [notAllowed, setNotAllowed] = useState(true);
  const loading = useSelector((state) => state.userSlice.loading);
  const role = useSelector((state) => state.userSlice.user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunction = async () => {
      await dispatch(getUserData());
      console.log("User Role in main : " + role);
      if (role && allowedUsers.includes(role) === false) {
        // alert("you are not allowed!");
        // window.location.replace("/not-allowed");
        setNotAllowed(true);
      } else {
        console.log("Your role is :", role);
        setNotAllowed(false);
      }
    };

    asyncFunction();
  }, [role]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notAllowed) {
    return <p>Not Allowed</p>;
  }
  return <div>{children}</div>;
}

export default ProtectedRoutes;
