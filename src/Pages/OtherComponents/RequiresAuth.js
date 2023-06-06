import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export function AuthRequired({ children }) {
  const { isLogged } = useContext(AuthContext);
  
  let location  = useLocation()
  return isLogged ? children : <Navigate to="/login" state={{from: location}}/>;
}
