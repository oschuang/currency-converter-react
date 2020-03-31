import React from "react";
import { numberWithCommas } from "../utils/helpers";

const Result = function(props) {
  const { fromCurrency, toCurrency, amount, result } = props;
  //Only render text if both currencies selected and an amount is present
  const resultText =
    fromCurrency && toCurrency && amount
      ? `${amount} ${fromCurrency} = ${result} ${toCurrency}`
      : "";

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
