import { useReducer } from "react";
import UsersContext from "./context";

const initialState = {
  username: null,
  profile_photo: null,
};

function UsersProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, { type, payload }) => {
    switch (type) {
      case "LOGIN":
        localStorage.setItem("user-login", JSON.stringify(payload));
        return {
          ...prevState,
          username: payload.username,
          profile_photo: payload.profile_photo,
        };

      case "LOGOUT":
        localStorage.removeItem("user-login");
        return {
          ...prevState,
          username: null,
          profile_photo: null,
        };

      case "EDIT_PROFILE":
        localStorage.setItem("user-login", JSON.stringify(payload));
        return {
          ...prevState,
          username: payload.username,
          profile_photo: payload.profile_photo,
        };

      default:
        return prevState;
    }
  }, initialState);

  return (
    <UsersContext.Provider
      value={{ usersState: state, usersDispatch: dispatch }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
