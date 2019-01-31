import React from "react";
import PropTypes from "prop-types";

const Label = props => (
  <label htmlFor={props.htmlFor || ""}>{props.text}</label>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string.isRequired
};

export { Label };
