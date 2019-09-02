import PropTypes from "prop-types";
import { useState } from "react";

function ScaryButton({ action, children, limit, messages }) {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    if (count === limit) {
      action();
      setCount(0);
    }
  };

  const message = messages[count];

  return children({ message, onPress });
}

ScaryButton.defaultProps = {
  action: () => null,
  limit: 2,
  messages: ["Delete", "Are you sure?"]
};

ScaryButton.propTypes = {
  action: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ScaryButton;
