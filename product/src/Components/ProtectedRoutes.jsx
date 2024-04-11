import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/slices/action";

function ProtectedRoutes({ children }) {
  const allowedUsers = ["admin"];
  const [notAllowed, setNotAllowed] = useState(true);
  const loading = useSelector((state) => state.userSlice.loading);
  const role = useSelector((state) => state.userSlice.user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunction = async () => {
      const res = await dispatch(getUserData());
      console.log("User Role is : " + role);
      if (role && allowedUsers.includes(role) === false) {
        // alert("you are not allowed!");
        // window.location.replace("/not-allowed");
        setNotAllowed(true);
      } else {
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
