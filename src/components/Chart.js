import React from "react";
import { numberWithCommas } from "../utils/helpers";

const Chart = function(props) {
  const amounts = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
  return (
    <div className="chart">
      <div className="column-chart">
        <h3 className="chart-header">{`Convert ${props.fromCurrency} to ${props.toCurrency}`}</h3>
        <h4 className="currency-header">{props.fromCurrency}</h4>
        {amounts.map((amount, i) => {
          const oddEven = (i + 1) % 2 === 0 ? "line-even" : "line-odd";
          return <p className={oddEven}>{`${amount} ${props.fromCurrency}`}</p>;
        })}
      </div>
      <div className="column-chart">
        <h3 className="chart-header"> &nbsp; </h3>
        <h4 className="currency-header">{props.toCurrency}</h4>
        {amounts.map((amount, i) => {
          const oddEven = (i + 1) % 2 === 0 ? "line-even" : "line-odd";
          return (
            <p className={oddEven}>{`${numberWithCommas(
              (props.rate * amount).toFixed(3)
            )} ${props.toCurrency}`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
