import React from 'react';

const Input = function(props) {
    return (
      <div className="form-div">
        <p className="form-label">Amount</p>
        <input onKeyPress = {(event) => props.validateInput(event)} className="form-element" onKeyUp={(event) => props.handleInputAmount(event)}></input>
      </div>
    )
  }

export default Input;