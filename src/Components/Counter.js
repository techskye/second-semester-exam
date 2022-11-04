import React from "react";
import "./Counter.css";
import useCount from "./useCount";
import { Helmet } from "react-helmet-async";

const Counter = () => {
  const { state, handleReset, handleSubstraction, handleAddition, setValue } =
    useCount();
  return (
    <>
      <Helmet>
        <title>Counter App</title>
        <meta
          name="description"
          content="A counter app using a custom hook with substraction, addition and reset button"
        />
        <link rel="cononical" href="/CounterTwo" />
      </Helmet>
      <div className="container">
        <div className="count">
          <h2>{state.count}</h2>
        </div>
        <div className="btn">
          <button className="btn1" onClick={handleAddition}>
            Increment
          </button>
          <button className="btn2" onClick={handleReset}>
            Reset
          </button>
          <button className="btn3" onClick={handleSubstraction}>
            Decrement
          </button>
        </div>
        <div>
          <label>
            <button className="btn4">Set Value</button>
          </label>
          <input type="number" value={state.number} onChange={setValue} />
        </div>
      </div>
    </>
  );
};

export default Counter;
