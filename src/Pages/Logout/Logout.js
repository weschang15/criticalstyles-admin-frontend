import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "react-apollo";
import { LOGOUT } from "../../Mutations";
import { AuthDispatch } from "../../contexts/AuthContext";
import { LOGOUT_USER } from "../../actions";

function Logout() {
  const dispatch = useContext(AuthDispatch);
  const [logout] = useMutation(LOGOUT);

  useEffect(() => {
    const logoutUser = async () => {
      await logout();
    };

    logoutUser();
    dispatch({ type: LOGOUT_USER });
  });

  return <Redirect to="/" />;
}

export default Logout;
