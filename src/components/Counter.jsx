import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import plusLogo from "../assets/icons/plus.png";
import minusLogo from "../assets/icons/minus.png";
import resetLogo from "../assets/icons/reset.png";
import { decrement, increment, reset } from "../store/action/actionCreater";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };
  const res = () => {
    dispatch(reset());
  };

  return (
    <div className="wrapper">
      <div className="count">{count}</div>
      <div className="wrapper__btn">
        <button onClick={inc} className="inc btn">
          <img src={plusLogo} alt="plus" />
        </button>
        <button onClick={dec} className="dec btn">
          <img src={minusLogo} alt="minus" />
        </button>
        <button onClick={res} className="reset btn">
          <img src={resetLogo} alt="reset" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
