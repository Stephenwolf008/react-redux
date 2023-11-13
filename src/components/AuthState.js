import React from "react";

function AuthState(props) {
  return (
    <div>
      <h1>Login to use 50% off</h1>
      {props.show ? (
        <div>
          <p>Congratulations you got 50% off on HGDU14</p>
        </div>
      ) : (
        <div>
          <p>User not authorized</p>
        </div>
      )}
    </div>
  );
}

export default AuthState;
