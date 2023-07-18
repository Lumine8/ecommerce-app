import { useContext, useState } from "react";
import { AuthContext } from "../..";
export default function Register() {
  const { token, currentUser, signupHandler } = useContext(AuthContext);
  const [confirmPass, setConfirmPass] = useState(true);
  const [emailAndPass, setEmailAndPass] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    pass_word: "",
  });

  const confirmPasshandler = (e) => {
    if (
      emailAndPass.first_name &&
      emailAndPass.last_name &&
      emailAndPass.pass_word &&
      emailAndPass.email_id !== ""
    ) {
      setConfirmPass(emailAndPass.pass_word !== e.target.value);
    }else{
      setConfirmPass(true)
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
    <div id="container">
      <h1>This is the Registeration Page</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => changeHandlerFirst(e)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => changeHandlerLast(e)}
      />
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
      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => confirmPasshandler(e)}
      />
      <button onClick={clickHandler} disabled={confirmPass}>
        Register
      </button>
    </div>
  );
}
