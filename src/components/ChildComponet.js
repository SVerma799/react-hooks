import React from "react";
import { LoginContext } from "../App";
const ChildComponet = () => {
  let [loggedIn, setLoggedIn] = React.useContext(LoginContext);

  return (
    <div>
      Child Component
      <p>{loggedIn} value</p>
      <button
        onClick={() => setLoggedIn(loggedIn === "first" ? "second" : "first")}
      >
        Change Value
      </button>
    </div>
  );
};

export default ChildComponet;
