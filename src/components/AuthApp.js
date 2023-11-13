import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthState from "./AuthState";
import AuthFunction from "./AuthFunction";

function AuthApp(props) {
  const sel = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <AuthState show={sel} />
      <AuthFunction act={dispatch} />
    </div>
  );
}

export default AuthApp;
