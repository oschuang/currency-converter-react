import React from "react";
import Input from "./Input/Input";
import Dropdown from "./Dropdown/Dropdown";
import Button from "./Button/Button";

const Form = function(props) {
  return (
    <div id="forms-wrapper">
      <Input
        validateInput={props.validateInput}
        handleInputAmount={props.handleInputAmount}
      />
      <Dropdown
        listType={"From"}
        currencies={props.currencies}
        currentSelection={props.fromCurrency}
        otherSelection={props.toCurrency}
        handleSelectCurrency={props.handleSelectCurrency}
      />
      <Button switchCurrencies={props.switchCurrencies}></Button>
      <Dropdown
        listType={"To"}
        currencies={props.currencies}
        currentSelection={props.toCurrency}
        otherSelection={props.fromCurrency}
        handleSelectCurrency={props.handleSelectCurrency}
      />
    </div>
  );
};

export default Form;
