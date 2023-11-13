import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterState from "./CounterState";
import CounterApp from "./CounterApp";

function MyCounter(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <CounterState show={count} />
      <CounterApp act={dispatch} />
    </div>
  );
}

export default MyCounter;
