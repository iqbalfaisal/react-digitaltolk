import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login/Login";
import { Task } from "./components/Task/Task";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>{token ? <Task setToken={setToken} /> : <Login setToken={setToken} />}</>
  );
}

export default App;
