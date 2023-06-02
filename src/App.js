import { createContext, useState } from "react";
import "./App.css";
import ChildComponet from "./components/ChildComponet";
import Reference from "./components/Reference";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState("first");
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <div className="App">
        <ChildComponet />
        <Reference />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
