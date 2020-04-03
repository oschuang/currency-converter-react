import React from "react";
import Input from "./form-components/Input";
import Dropdown from "./form-components/Dropdown";
import Button from "./form-components/Button";

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
