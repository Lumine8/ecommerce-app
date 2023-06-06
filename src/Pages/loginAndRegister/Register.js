import { useContext, useState } from "react";
import { AuthContext } from "../..";
export default function Register() {
  const { token, currentUser, signupHandler } = useContext(AuthContext);

  const [emailAndPass, setEmailAndPass] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    pass_word: "",
  });

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
      <button onClick={clickHandler}>Register</button>
    </div>
  );
}
