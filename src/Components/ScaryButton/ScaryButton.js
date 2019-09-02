import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ScaryButton({ action, children, limit, messages }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === limit) {
      action();
      setCount(0);
    }
  }, [count, limit, action]);

  return children({
    message: messages[count],
    onPress: () => setCount(prevCount => prevCount + 1)
  });
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
