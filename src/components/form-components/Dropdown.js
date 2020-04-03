import React from "react";

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

  return (
    <div className="form-div">
      <p className="form-label from-to">
        {props.listType}
        <img
          id={`img-${props.listType.toLowerCase()}`}
          src={flagImages[props.currentSelection]}
        />
      </p>
      <select
        className="form-element"
        currencies={props.currencies}
        onChange={event => props.handleSelectCurrency(event, props.listType)}
      >
        <option selected disabled>
          {props.listType}
        </option>
        {props.currencies.map(currency => {
          const currencyCode = currency[0] + currency[1] + currency[2];
          const className =
            currencyCode === props.otherSelection ? "hidden" : "";
          if (currencyCode === props.currentSelection) {
            return (
              <option selected className={className}>
                {currency}
              </option>
            );
          } else {
            return <option className={className}>{currency}</option>;
          }
        })}
      </select>
    </div>
  );
};

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
  USD: "https://lipis.github.io/flag-icon-css/flags/4x3/um.svg",
  ZAR: "https://lipis.github.io/flag-icon-css/flags/4x3/za.svg"
};

export default Dropdown;
