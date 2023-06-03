import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [emails, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [emailAndPass, setEmailAndPass] = useState({ email: "", password: "" });

  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: emailAndPass.email,
        password: emailAndPass.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeHandlerPass = (e) => {
    setPass(e.target.value);
  };
  const clickHandler = () => {
    setEmailAndPass({ email: emails, password: pass });
    signupHandler();
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
    </div>
  );
}
