import { useReducer } from "react";

const initialState = {
  count: 0,
};

const useCount = () => {
  const countReduce = (state, action) => {
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
  };
  const [state, dispatch] = useReducer(countReduce, initialState);

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
  return {
    state,
    setValue,
    handleAddition,
    handleSubstraction,
    handleReset,
  };
};

export default useCount;
