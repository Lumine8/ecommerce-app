import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {PiSignInLight} from "react-icons/pi"

import { AuthContext } from "../..";
import "./Login.css"

export default function Login() {
  const { token, currentUser, loginHandler } = useContext(AuthContext);

  const [emailAndPass, setEmailAndPass] = useState({
    email_id: "",
    pass_word: "",
  });

  const [showVisibility, setVisibility] = useState(false);

  const guestSignin = () => {
    loginHandler({
      email_id: "adarshbalika@gmail.com",
      pass_word: "adarshbalika",
    });
  };

  const changeHandlerEmail = (e) => {
    setEmailAndPass({ ...emailAndPass, email_id: e.target.value });
  };
  const changeHandlerPass = (e) => {
    setEmailAndPass({ ...emailAndPass, pass_word: e.target.value });
  };
  const clickHandler = () => {
    setEmailAndPass({ ...emailAndPass });

    loginHandler(emailAndPass);
  };
  return (
    <div id="container" className="LoginPage">
      <h1 style={{paddingBottom:"2rem"}}>Login <PiSignInLight size={50} style={{marginBottom:"-15px"}}/></h1>
      <div className="LoginInputs">
      <input
      className="loginInput"
      style={{marginBottom:"3rem"}}
        type="text"
        placeholder="email"
        onChange={(e) => changeHandlerEmail(e)}
      />
      <br/>
      <input
      style={{marginBottom:"3rem", marginLeft:"10px"}}
        type={showVisibility ? "text" : "password"}
        placeholder="password"
        onChange={(e) => changeHandlerPass(e)}
      />
      {showVisibility ? (
        <FaRegEye
          onClick={() => {
            setVisibility(!showVisibility);
          }}
        />
      ) : (
        <FaRegEyeSlash
          onClick={() => {
            setVisibility(!showVisibility);
          }}
        />
      )}
      </div>
      <br />
      <button onClick={clickHandler}>Submit</button>
      <Link style={{textDecoration:"none", color:"black"}} to="/register">Register</Link>

      <div>
        Sign in as <button onClick={guestSignin}>Guest</button>
      </div>
    </div>
  );
}
