import React, { useEffect, useState } from "react";

function ProtectedRoutes({ children }) {
  const allowedUsers = ["admin"];
  const [notAllowed, setNotAllowed] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get_user_data = async () => {
      const res = await fetch(
        "https://mocki.io/v1/c3f764c0-0d34-40c4-81b4-545dc127e109"
      );
      const user = await res.json();
      console.log(user.role);
      if (allowedUsers.includes(user.role) === false) {
        alert("you are not allowed!");
        // window.location.replace("/not-allowed");
        setNotAllowed(true);
      } else {
        // alert(user.role + " is " + " allowed");
        setNotAllowed(false);
      }
      setLoading(false);
    };
    get_user_data();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notAllowed) {
    return <p>Not Allowed</p>;
  }
  return <div>{children}</div>;
}

export default ProtectedRoutes;
