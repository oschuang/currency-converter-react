import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltH} from '@fortawesome/free-solid-svg-icons';  
import { faArrowsAltV} from '@fortawesome/free-solid-svg-icons'; 

const Input = function(props) {
  return (
    <div className="form-div">
      <p className="form-label">Amount</p>
      <input onKeyPress = {(event) => props.validateInput(event)} className="form-element" onKeyUp={(event) => props.handleInputAmount(event)}></input>
    </div>
  )
}

const Dropdown = function(props) {
  /*
  Selected attribute on <option>:
  - used for the switch button
  - if switch is hit, it will check the two selected options held in state; then find the matching option and set it as selected
  - Had to do this otherwise the dropdown wouldn't change the display even though the value would change
  Class:
  - if the other dropdown has selected an option, that option needs to be removed from the other dropdown
  - Ex. From: AUD, then To: AUD should be eliminated and vice-versa (prevent same currency conversion)
  */
  
  const flagImages = {
    AUD: "https://lipis.github.io/flag-icon-css/flags/4x3/au.svg",
    BGN: "https://lipis.github.io/flag-icon-css/flags/4x3/bg.svg",
    BRL: "https://lipis.github.io/flag-icon-css/flags/4x3/br.svg",
    CAD: "https://lipis.github.io/flag-icon-css/flags/4x3/ca.svg",
    CHF: "https://lipis.github.io/flag-icon-css/flags/4x3/ch.svg",
    CNY: "https://lipis.github.io/flag-icon-css/flags/4x3/cn.svg",
    CZK: "https://lipis.github.io/flag-icon-css/flags/4x3/cz.svg",
    DKK: "https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg",
    EUR: "https://lipis.github.io/flag-icon-css/flags/4x3/eu.svg",
    GBP: "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg",
    HKD: "https://lipis.github.io/flag-icon-css/flags/4x3/hk.svg",
    HRK: "https://lipis.github.io/flag-icon-css/flags/4x3/hr.svg",
    HUF: "https://lipis.github.io/flag-icon-css/flags/4x3/hu.svg",
    IDR: "https://lipis.github.io/flag-icon-css/flags/4x3/id.svg",
    ILS: "https://lipis.github.io/flag-icon-css/flags/4x3/il.svg",
    INR: "https://lipis.github.io/flag-icon-css/flags/4x3/in.svg",
    ISK: "https://lipis.github.io/flag-icon-css/flags/4x3/is.svg",
    JPY: "https://lipis.github.io/flag-icon-css/flags/4x3/jp.svg",
    KRW: "https://lipis.github.io/flag-icon-css/flags/4x3/kr.svg",
    MXN: "https://lipis.github.io/flag-icon-css/flags/4x3/mx.svg",
    MYR: "https://lipis.github.io/flag-icon-css/flags/4x3/my.svg",
    NOK: "https://lipis.github.io/flag-icon-css/flags/4x3/no.svg",
    NZD: "https://lipis.github.io/flag-icon-css/flags/4x3/nz.svg",
    PHP: "https://lipis.github.io/flag-icon-css/flags/4x3/ph.svg",
    PLN: "https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg",
    RON: "https://lipis.github.io/flag-icon-css/flags/4x3/ro.svg",
    RUB: "https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg",
    SEK: "https://lipis.github.io/flag-icon-css/flags/4x3/se.svg",
    SGD: "https://lipis.github.io/flag-icon-css/flags/4x3/sg.svg",
    THB: "https://lipis.github.io/flag-icon-css/flags/4x3/th.svg",
    TRY: "https://lipis.github.io/flag-icon-css/flags/4x3/tr.svg",
    USD: 'https://lipis.github.io/flag-icon-css/flags/4x3/um.svg',
    ZAR: "https://lipis.github.io/flag-icon-css/flags/4x3/za.svg"
  }
  
  return (
    <div className="form-div">
      <p className="form-label from-to">{props.listType}
        <img id={`img-${props.listType.toLowerCase()}`} src={flagImages[props.currentSelection]} />
      </p>
      <select className="form-element" currencies={props.currencies} onChange={(event) => props.handleSelectCurrency(event, props.listType)}>
        <option selected disabled>{props.listType}</option>
        { props.currencies.map(currency => 
        { 
          const currencyCode = currency[0] + currency[1] + currency[2];
          const className = currencyCode === props.otherSelection ? "hidden" : "";
          if (currencyCode === props.currentSelection) {
            return <option selected className={className}>{currency}</option>
          }
          else {
            return <option className={className}>{currency}</option>
          }
        })
       }
     </select>
    </div>
  )
}

const Button = function(props) {
  return (
      <div id="button-div">
        <p className="form-label"> &nbsp; </p>
        <button onClick={props.switchCurrencies} id="btn-switch" className="form-element">
          <FontAwesomeIcon icon={faArrowsAltV} id="arrow-vertical" />
          <FontAwesomeIcon icon={faArrowsAltH} id="arrow-horizontal" />
        </button>
      </div>
  )
}


const Result = function(props) {
  const {fromCurrency, toCurrency, amount, result} = props;
  //Only render text if both currencies selected and an amount is present
  const resultText = fromCurrency && toCurrency && amount ? `${amount} ${fromCurrency} = ${result} ${toCurrency}` : "";
  
  return (
    <div id='result-div'>
      <p id='result-from-p'>{ `${numberWithCommas(props.amount)} ${props.fromCurrency} =` }</p>
      <h3 id='result-to-p'>{ `${numberWithCommas(props.result)} ${props.toCurrency}` }</h3>
    </div>
  )
}
  
const Chart = function(props) {
  const amounts = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
  return (
    <div className="chart">
      <div className="column-chart">
        <h3 className="chart-header">{`Convert ${props.fromCurrency} to ${props.toCurrency}`}</h3>
        <h4 className='currency-header'>{props.fromCurrency}</h4>
        {amounts.map( (amount, i) => {
          const oddEven = (i + 1) % 2 === 0 ? "line-even" : "line-odd"; 
          return <p className={oddEven}>{`${amount} ${props.fromCurrency}`}</p>})}
      </div>
      <div className="column-chart">
        <h3 className="chart-header"> &nbsp; </h3>
        <h4 className='currency-header'>{props.toCurrency}</h4>
        {amounts.map( (amount, i) => {
          const oddEven = (i + 1) % 2 === 0 ? "line-even" : "line-odd"; 
          return <p className={oddEven}>{`${numberWithCommas((props.rate * amount).toFixed(3))} ${props.toCurrency}`}</p>})}
      </div>
    </div>
  )
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      currencies: [],
      rootUrl: 'https://api.frankfurter.app',
      fromCurrency: 'USD',
      toCurrency: 'JPY',
      fromRate: null, //gets set onMount using fromCurrency
      toRate: null, //gets set onMount using toCurrency
      amount: 1, //by default convert 1
      result: 1, //used 1 bc null created an error for Result component
    }
    
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
        const currenciesArr = []
         for (let prop in data) {
          currenciesArr.push(`${prop}: ${data[prop]}`)
        }

        this.setState({
          currencies: [...currenciesArr], 
          loaded: true,
        })
      })
      .then( () => {
        this.setFromRate();
        this.setToRate();
        this.getResult();
    })
  }
  
  
  handleSelectCurrency(event, listType) {
    const currency = event.target.value;
    new Promise( (resolve, reject) => {
      this.setCurrency(currency, listType);
      resolve();
    }).then( () => {
        this.setFromRate();
        this.setToRate();
        this.getResult(); // updates result when changing currencies
    })
  }
  
  setCurrency(currency, listType) {
    const currencyCode = currency[0] + currency[1] + currency[2];
    if (listType.toUpperCase() === 'FROM') {
          this.setState({fromCurrency: currencyCode});
      } else {
          this.setState({toCurrency: currencyCode})                   
      }
  }
  
   setFromRate() {
      this.fetchRate(this.state.fromCurrency, this.state.toCurrency)
        .then(rate => this.setState({fromRate: rate}))
    }
   setToRate() {
      this.fetchRate(this.state.toCurrency, this.state.fromCurrency)
        .then(rate => this.setState({toRate: rate}))
    }
   fetchRate(currencyOne, currencyTwo) {
      return fetch(`${this.state.rootUrl}/latest?from=${currencyOne}`)
      .then(res => res.json())
      .then(data => data.rates[currencyTwo])
    }
  
  //Runs as user types into input
  handleInputAmount(event) {
    const amount = event.target.value;
    if (amount == 0) {
      return;
    }
    new Promise( (resolve, reject) => {
      this.setAmount(amount);
      resolve();
    })
    .then( () => {
      //render the result as user types
      this.getResult();
    })
  }
  
  setAmount(amount) {
    this.setState({amount: amount});
  }

  getResult() {
    fetch(`${this.state.rootUrl}/latest?amount=${this.state.amount}&from=${this.state.fromCurrency}&to=${this.state.toCurrency}`)
      .then(response => {
        return response.json();
    })
      .then(data => {
        let result = data.rates[this.state.toCurrency].toFixed(3); //round to 3 decimals
        this.setState({result: result});
    })
  }
  
  switchCurrencies() {
    const originalFrom = this.state.fromCurrency;
    const originalTo = this.state.toCurrency;
    
    new Promise((resolve, reject) => {
      this.setState({
        fromCurrency: originalTo,
        toCurrency: originalFrom,
      })
      resolve();
    })
     .then( () => {
        this.getResult();
    })
  
  }
  
 validateInput(event) {
   let typed = event.charCode;
   
   const decimalCode = 46;
   const zeroCode = 48;
   
     //If not a number, prevent; Nums char code range: 48-57
    if (typed != decimalCode && (typed < 48 || typed > 57)) {
      console.log('not valid')
      event.preventDefault();
    }
   
   //Only allow one decimal point; if amount already has decimal then prevent
    if (typed == decimalCode) {
      if (this.state.amount.toString().split('').indexOf('.') > -1) {
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
        <div id='loading-div'>
          <p>Now loading currency data from the <a href='https://api.frankfurter.app/'>Frankfurter API</a>.</p>
          <p>If this app does not load, then the API is currently unavailable. Please try again later.</p>
        </div>
      )
    }
    
    else {
      return (
       <React.Fragment>
          <h2 id="header">Currency Converter</h2>
          <div id='top-wrapper'>
            <div id='forms-wrapper'>
              <Input validateInput={this.validateInput} handleInputAmount={this.handleInputAmount} />
              <Dropdown 
                listType={'From'}
                currencies={this.state.currencies} 
                currentSelection={this.state.fromCurrency} otherSelection={this.state.toCurrency}
                handleSelectCurrency={this.handleSelectCurrency} />
              <Button switchCurrencies={this.switchCurrencies}></Button>
              <Dropdown 
                listType={"To"}
                currencies={this.state.currencies} 
                currentSelection={this.state.toCurrency} otherSelection={this.state.fromCurrency}
                handleSelectCurrency={this.handleSelectCurrency} />
            </div>
            <Result 
              fromCurrency={this.state.fromCurrency} toCurrency={this.state.toCurrency}
              amount={this.state.amount} result={this.state.result} />
          </div>
         { /*Only render the chart if two currencies have been selected */
            this.state.fromCurrency && this.state.toCurrency ? 
              (<div id="charts-wrapper">
                <Chart 
                  rate={this.state.fromRate}
                  fromCurrency={this.state.fromCurrency} 
                  toCurrency={this.state.toCurrency} />
                <Chart 
                  rate={this.state.toRate}
                  fromCurrency={this.state.toCurrency} 
                  toCurrency={this.state.fromCurrency} /> 
                <p id="anchor">Currency rates provided by <a href="https://www.frankfurter.app/">Frankfurter API</a>
                </p>
              </div>)
              : null
          }
      </React.Fragment>
      )
    }
     
  }
  
}


function numberWithCommas(x) {
  //Taken from: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript?rq=1
  const parts = x.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (parts[1] ? "." + parts[1] : "");
}


export default App;
