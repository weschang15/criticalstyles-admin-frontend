import PropTypes from "prop-types";
import React from "react";
import { animated, useSpring } from "react-spring";

function Accordion({ closedHeight, openedHeight, children, toggled }) {
  const styles = useSpring({
    from: { height: closedHeight },
    to: { height: toggled ? openedHeight : closedHeight }
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

Accordion.propTypes = {
  closedHeight: PropTypes.number.isRequired,
  openedHeight: PropTypes.number.isRequired,
  toggled: PropTypes.bool.isRequired
};

Accordion.defaultProps = {
  closedHeight: 200,
  openedHeight: 480
};

export default Accordion;
