import React from "react";
import { dec, inc, res } from "../actions/CounterActions";

function CounterApp(props) {
  return (
    <div>
      <button onClick={() => props.act(inc())}>+</button>
      <button onClick={() => props.act(dec())}>-</button>
      <button onClick={() => props.act(res())}>Reset</button>
    </div>
  );
}

export default CounterApp;
