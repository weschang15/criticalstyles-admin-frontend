import React, { useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import { Mutation } from "react-apollo";

import CreateStylesForm from "./CreateStylesForm";
import { CREATE_CRITICAL_STYLE } from "../Mutations";
import { PrimaryCard, Spinner, Textarea } from "../Elements";
import CriticalStyles from "./CriticalStyles";

const AnimatedCard = animated(PrimaryCard);
const AnimatedTextarea = animated(Textarea);

function CreateStyles() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const set = css => {
    setData(css);
    setOpen(open => !open);
  };

  // spring configuration
  const { width, height, ...rest } = useSpring({
    from: {
      width: "22em",
      height: "4.8em"
    },
    to: {
      width: open ? "48em" : "22em",
      height: open ? "48em" : "4.8em"
    }
  });

  const transitions = useTransition(Boolean(data), null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" }
  });

  return (
    <Mutation mutation={CREATE_CRITICAL_STYLE}>
      {(func, { loading }) => (
        <AnimatedCard style={{ width, height, ...rest }}>
          {loading ? (
            <Spinner />
          ) : (
            transitions.map(({ item, key, props }) =>
              item ? (
                <animated.div style={props} key={key}>
                  <CriticalStyles data={data} />
                </animated.div>
              ) : (
                <animated.div style={props} key={key}>
                  <CreateStylesForm
                    key={key}
                    onSubmit={func}
                    handleUpdate={set}
                  />
                </animated.div>
              )
            )
          )}
        </AnimatedCard>
      )}
    </Mutation>
  );
}

export default CreateStyles;
