import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "react-apollo";
import { LOGOUT } from "../../Mutations";
import { UserContext } from "../../Components/UserContext";

function Logout() {
  const { setAuthenticated, setUser } = useContext(UserContext);
  const [logout] = useMutation(LOGOUT);

  useEffect(() => {
    const logoutUser = async () => {
      await logout();
    };

    logoutUser();
    setUser(null);
    setAuthenticated(false);
  });

  return <Redirect to="/" />;
}

export default Logout;
