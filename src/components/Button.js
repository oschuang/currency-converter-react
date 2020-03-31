import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH, faArrowsAltV } from "@fortawesome/free-solid-svg-icons";

const Button = function(props) {
  return (
    <div id="button-div">
      <p className="form-label"> &nbsp; </p>
      <button
        onClick={props.switchCurrencies}
        id="btn-switch"
        className="form-element"
      >
        <FontAwesomeIcon icon={faArrowsAltV} id="arrow-vertical" />
        <FontAwesomeIcon icon={faArrowsAltH} id="arrow-horizontal" />
      </button>
    </div>
  );
};

export default Button;
