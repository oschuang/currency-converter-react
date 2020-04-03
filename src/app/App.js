import React from "react";
import "../scss/css/main.min.css";

import Result from "../components/Result";
import Chart from "../components/Chart";
import Form from "../components/Form";

import { numberWithCommas } from "../utils/helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      currencies: [],
      rootUrl: "https://api.frankfurter.app",
      fromCurrency: "USD",
      toCurrency: "JPY",
      fromRate: null, //gets set onMount using fromCurrency
      toRate: null, //gets set onMount using toCurrency
      amount: 1, //by default convert 1
      result: 1 //used 1 bc null created an error for Result component
    };

    this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
    this.setCurrency = this.setCurrency.bind(this);
    this.setFromRate = this.setFromRate.bind(this);
    this.setToRate = this.setToRate.bind(this);
    this.fetchRate = this.fetchRate.bind(this);

    this.handleInputAmount = this.handleInputAmount.bind(this);
    this.setAmount = this.setAmount.bind(this);

    this.getResult = this.getResult.bind(this);

    this.switchCurrencies = this.switchCurrencies.bind(this);

    this.validateInput = this.validateInput.bind(this);
  }

  //Render From and To dropdowns
  componentDidMount() {
    fetch(`${this.state.rootUrl}/currencies`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data)
        const currenciesArr = [];
        for (let prop in data) {
          currenciesArr.push(`${prop}: ${data[prop]}`);
        }

        this.setState({
          currencies: [...currenciesArr],
          loaded: true
        });
      })
      .then(() => {
        this.setFromRate();
        this.setToRate();
        this.getResult();
      });
  }

  handleSelectCurrency(event, listType) {
    const currency = event.target.value;
    new Promise((resolve, reject) => {
      this.setCurrency(currency, listType);
      resolve();
    }).then(() => {
      this.setFromRate();
      this.setToRate();
      this.getResult(); // updates result when changing currencies
    });
  }

  setCurrency(currency, listType) {
    const currencyCode = currency[0] + currency[1] + currency[2];
    if (listType.toUpperCase() === "FROM") {
      this.setState({ fromCurrency: currencyCode });
    } else {
      this.setState({ toCurrency: currencyCode });
    }
  }

  setFromRate() {
    this.fetchRate(this.state.fromCurrency, this.state.toCurrency).then(rate =>
      this.setState({ fromRate: rate })
    );
  }
  setToRate() {
    this.fetchRate(this.state.toCurrency, this.state.fromCurrency).then(rate =>
      this.setState({ toRate: rate })
    );
  }
  fetchRate(currencyOne, currencyTwo) {
    return fetch(`${this.state.rootUrl}/latest?from=${currencyOne}`)
      .then(res => res.json())
      .then(data => data.rates[currencyTwo]);
  }

  //Runs as user types into input
  handleInputAmount(event) {
    const amount = event.target.value;
    if (amount == 0) {
      return;
    }
    new Promise((resolve, reject) => {
      this.setAmount(amount);
      resolve();
    }).then(() => {
      //render the result as user types
      this.getResult();
    });
  }

  setAmount(amount) {
    this.setState({ amount: amount });
  }

  getResult() {
    fetch(
      `${this.state.rootUrl}/latest?amount=${this.state.amount}&from=${this.state.fromCurrency}&to=${this.state.toCurrency}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let result = data.rates[this.state.toCurrency].toFixed(3); //round to 3 decimals
        this.setState({ result: result });
      });
  }

  switchCurrencies() {
    const originalFrom = this.state.fromCurrency;
    const originalTo = this.state.toCurrency;

    new Promise((resolve, reject) => {
      this.setState({
        fromCurrency: originalTo,
        toCurrency: originalFrom
      });
      resolve();
    }).then(() => {
      this.setFromRate();
      this.setToRate();
      this.getResult();
    });
  }

  validateInput(event) {
    let typed = event.charCode;
    const decimalCode = 46;
    const zeroCode = 48;
    //If not a number, prevent; Nums char code range: 48-57
    if (typed != decimalCode && (typed < 48 || typed > 57)) {
      console.log("not valid");
      event.preventDefault();
    }
    //Only allow one decimal point; if amount already has decimal then prevent
    if (typed == decimalCode) {
      if (
        this.state.amount
          .toString()
          .split("")
          .indexOf(".") > -1
      ) {
        event.preventDefault();
      }
    }
    //Can't start with a 0 i.e. if input is blank, prevent 0 from being typed
    if (typed === zeroCode) {
      if (!event.target.value) {
        event.preventDefault();
      }
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div id="loading-div">
          <p>
            Now loading currency data from the{" "}
            <a href="https://api.frankfurter.app/">Frankfurter API</a>.
          </p>
          <p>
            If this app does not load, then the API is currently unavailable.
            Please try again later.
          </p>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h2 id="header">Currency Converter</h2>
          <div id="top-wrapper">
            <Form
              validateInput={this.validateInput}
              handleInputAmount={this.handleInputAmount}
              currencies={this.state.currencies}
              fromCurrency={this.state.fromCurrency}
              toCurrency={this.state.toCurrency}
              handleSelectCurrency={this.handleSelectCurrency}
              switchCurrencies={this.switchCurrencies}
            />
            <Result
              fromCurrency={this.state.fromCurrency}
              toCurrency={this.state.toCurrency}
              amount={this.state.amount}
              result={this.state.result}
            />
          </div>
          {/*Only render the chart if two currencies have been selected */
          this.state.fromCurrency && this.state.toCurrency ? (
            <div id="charts-wrapper">
              <Chart
                rate={this.state.fromRate}
                fromCurrency={this.state.fromCurrency}
                toCurrency={this.state.toCurrency}
              />
              <Chart
                rate={this.state.toRate}
                fromCurrency={this.state.toCurrency}
                toCurrency={this.state.fromCurrency}
              />
              <p id="anchor">
                Currency rates provided by{" "}
                <a href="https://www.frankfurter.app/">Frankfurter API</a>
              </p>
            </div>
          ) : null}
        </React.Fragment>
      );
    }
  }
}

export default App;
