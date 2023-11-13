import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../actions/CounterActions";

function AuthApp(props) {
  const sel = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login to use 50% off</h1>
      {sel ? (
        <div>
          <p>Congratulations you got 50% off on HGDU14</p>
        </div>
      ) : (
        <div>
          <p>User not authorized</p>
        </div>
      )}
      <button onClick={() => dispatch(login())}>LOGIN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
}

export default AuthApp;
