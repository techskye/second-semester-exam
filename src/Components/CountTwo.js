import React from "react";
import "./CounterTwo.css";
import { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const countReducer = (state, action) => {
  if (action.type === "ADD") {
    return { count: state.count + 1 };
  }
  if (action.type === "SUBSTRACT") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  if (action.type === "VALUE") {
    return { count: action.value * 1 };
  }
  return state;
};

const initialState = {
  count: 0,
};

const CountTwo = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleAddition = () => {
    dispatch({
      type: "ADD",
    });
  };
  const handleSubstraction = () => {
    dispatch({
      type: "SUBSTRACT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const setValue = (e) => {
    dispatch({
      type: "VALUE",
      value: e.target.value,
      key: "number",
    });
  };
  return (
    <>
      <Helmet>
        <title>CounterTwo App</title>
        <meta
          name="description"
          content="A counter app using useReducer that have substraction, addition and reset button"
        />
        <link rel="cononical" href="/" />
      </Helmet>
      <div className="contain">
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

export default CountTwo;
