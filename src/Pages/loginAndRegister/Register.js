import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"

import { AuthContext } from "../..";
import "./Register.css";

export default function Register() {
  const { token, currentUser, signupHandler } = useContext(AuthContext);

  const [showVisibility, setVisibility] = useState(false);

  const [confirmPass, setConfirmPass] = useState(true);
  const [emailAndPass, setEmailAndPass] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    pass_word: "",
  });

  const confirmPasshandler = (e) => {
    if (
      emailAndPass.first_name !== "" &&
      emailAndPass.last_name !== "" &&
      emailAndPass.pass_word !== "" &&
      emailAndPass.email_id !== ""
    ) {
      setConfirmPass(emailAndPass.pass_word !== e.target.value);
    } else {
      setConfirmPass(true);
    }
  };

  const changeHandlerEmail = (e) => {
    setEmailAndPass({ ...emailAndPass, email_id: e.target.value });
  };
  const changeHandlerPass = (e) => {
    setEmailAndPass({ ...emailAndPass, pass_word: e.target.value });
  };
  const changeHandlerFirst = (e) => {
    setEmailAndPass({ ...emailAndPass, first_name: e.target.value });
  };
  const changeHandlerLast = (e) => {
    setEmailAndPass({ ...emailAndPass, last_name: e.target.value });
  };
  const clickHandler = () => {
    setEmailAndPass({ ...emailAndPass });
    signupHandler(emailAndPass);
  };
  return (
    <div id="container" className="RegisterPage">
      <h1>REGISTER</h1>
      <div className="registerForm">
        <input
          style={{ marginBottom: "3rem" }}
          type="text"
          placeholder="First Name"
          onChange={(e) => changeHandlerFirst(e)}
        />

        <input
          style={{ marginBottom: "3rem" }}
          type="text"
          placeholder="Last Name"
          onChange={(e) => changeHandlerLast(e)}
        />

        <input
          style={{ marginBottom: "3rem" }}
          type="text"
          placeholder="email"
          onChange={(e) => changeHandlerEmail(e)}
        />
      </div>
      <input
        style={{ marginBottom: "3rem" }}
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

      <input
        style={{ marginBottom: "3rem" }}
        type={showVisibility ? "text" : "password"}
        placeholder="confirm password"
        onChange={(e) => confirmPasshandler(e)}
      />

      <br />
      <button onClick={clickHandler} disabled={confirmPass}>
        Register
      </button>
      <p>Go back to <Link style={{textDecoration:"none", color:"black"}} to="/login">login</Link> Page</p>
    </div>
  );
}
