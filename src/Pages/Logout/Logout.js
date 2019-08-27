import { useContext, useEffect } from "react";
import { useMutation } from "react-apollo";
import { LOGOUT_USER } from "../../actions";
import { AuthDispatch } from "../../contexts/AuthContext";
import { LOGOUT } from "../../Mutations";

function Logout() {
  const dispatch = useContext(AuthDispatch);
  const [logout, { data, loading }] = useMutation(LOGOUT);

  useEffect(() => {
    logout();
  });

  if (loading) {
    return null;
  }

  if (data && data.logout) {
    const { ok } = data.logout;
    if (ok) {
      dispatch({ type: LOGOUT_USER });
    }
  }

  return null;
}

export default Logout;
