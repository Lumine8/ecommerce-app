import axios from "axios";
import { toast } from "react-hot-toast";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const signupHandler = async ({
    first_name,
    last_name,
    email_id,
    pass_word,
  }) => {
    console.log(first_name,
      last_name,
      email_id,
      pass_word,)
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post(`/api/auth/signup`, {
        name:first_name+" "+last_name,
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
          "loginDetails",
          JSON.stringify({
            encodedToken: encodedToken,
            currentUser: foundUser,
          })
        );
        setToken(encodedToken);
        toast.success("Successfully Logged in!");
        setCurrentUser(foundUser);
        setIsLogged(!isLogged);
        navigate(location?.state?.from?.pathname ?? "/");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
