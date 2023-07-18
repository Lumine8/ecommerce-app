import axios from "axios";
import { createContext, useState, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { INITTAL_STATE, productReducer } from "../Reducer/reducer";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [getAddress, setGetAddress] = useState([{
    street: "",
    state: "",
    city: "",
    pincode: "",
  }]);

  const [state, dispatch] = useReducer(productReducer, INITTAL_STATE);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const signupHandler = async ({
    first_name,
    last_name,
    email_id,
    pass_word,
  }) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post(`/api/auth/signup`, {
        name: first_name + " " + last_name,
        email: email_id,
        password: pass_word,
      });
      // saving the encodedToken in the localStorage
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginId",
          JSON.stringify({ token: encodedToken, currentUser: createdUser })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        setIsLogged(!isLogged);
        navigate(location?.state?.from?.pathname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async ({ email_id, pass_word }) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post(`/api/auth/login`, {
        email: email_id,
        password: pass_word,
      });

      // saving the encodedToken in the localStorage
      if (status === 200) {
        localStorage.setItem(
          "loginId",
          JSON.stringify({
            encodedToken,
            currentUser: foundUser,
          })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        setIsLogged(!isLogged);
        setGetAddress(foundUser.address);
        navigate(location?.state?.from?.pathname ?? "/");

        dispatch({
          type: "GET_WISHLIST_DATA",
          payload: foundUser?.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        token,
        currentUser,
        signupHandler,
        loginHandler,
        getAddress,
        setGetAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
