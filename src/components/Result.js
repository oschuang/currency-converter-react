import React from "react";
import { numberWithCommas } from "../utils/helpers";

const Result = function(props) {
  const { fromCurrency, toCurrency, amount, result } = props;
  return (
    <div id="result-div">
      <p id="result-from-p">{`${numberWithCommas(props.amount)} ${
        props.fromCurrency
      } =`}</p>
      <h3 id="result-to-p">{`${numberWithCommas(props.result)} ${
        props.toCurrency
      }`}</h3>
    </div>
  );
};

export default Result;
