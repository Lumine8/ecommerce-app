import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../..";

export default function Login() {
  const { token, currentUser, loginHandler } = useContext(AuthContext);

  const [emailAndPass, setEmailAndPass] = useState({
    email_id: "",
    pass_word: "",
  });
  
  const guestSignin = () =>{
    loginHandler({email_id:"adarshbalika@gmail.com",pass_word:"adarshbalika"})
  }

  const changeHandlerEmail = (e) => {

    setEmailAndPass({...emailAndPass, email_id:e.target.value})
  };
  const changeHandlerPass = (e) => {

    setEmailAndPass({...emailAndPass, pass_word:e.target.value})
  };
  const clickHandler = () => {
    setEmailAndPass({ ...emailAndPass });

    loginHandler(emailAndPass);
  };
  return (
    <div id="container">
      <h1>This is the Login Page</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => changeHandlerEmail(e)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => changeHandlerPass(e)}
      />
      <button onClick={clickHandler}>Submit</button>
      <Link to="/register">Register</Link>

      <div>
        Sign in as <button onClick={guestSignin}>Guest</button>
      </div>
    </div>
  );
}
