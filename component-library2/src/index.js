/**
 * @class ExampleComponent
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Label } from "./atoms/Label";

import styles from "./styles.css";

class ContainerComponent extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.test}>
        <p>
          <Label text="This is a container" />
        </p>
        {children}
      </div>
    );
  }
}

ContainerComponent.propTypes = {
  children: PropTypes.node
};

export { default as ContainerComponent };
