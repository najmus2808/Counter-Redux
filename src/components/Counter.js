import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/actions";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Countet: {state?.counter}</p>
      <button
        style={{ background: "pink", marginRight: "10px" }}
        onClick={() => dispatch(increment(5))}
      >
        Increment
      </button>
      <button
        style={{ background: "pink", marginRight: "10px" }}
        onClick={() => dispatch(decrement(2))}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
