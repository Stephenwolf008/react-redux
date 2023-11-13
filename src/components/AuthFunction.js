import React from "react";
import { login, logout } from "../actions/CounterActions";

function AuthFunction(props) {
  return (
    <div>
      <button onClick={() => props.act(login())}>LOGIN</button>
      <button onClick={() => props.act(logout())}>LOGOUT</button>
    </div>
  );
}

export default AuthFunction;
