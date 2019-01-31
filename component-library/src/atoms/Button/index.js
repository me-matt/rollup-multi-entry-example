import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";

class Button extends React.PureComponent {
  onClick = e => {
    // Explicitly force an error to demonstrate sourcemaps during debugging.
    console.log("entering the onClick event");
    null.filter(y => y.key === "abc")[0].value;
  };

  render() {
    const { id, label, text } = this.props;

    return (
      <div>
        {this.props.label && <Label htmlFor={id} text={label} />}
        <button id={this.props.id} type="button" onClick={this.onClick}>
          {text}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { Button };
