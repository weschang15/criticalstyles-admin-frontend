import React, { useState, useRef } from "react";
import { animated, useSpring, useTransition, config } from "react-spring";
import { Mutation } from "react-apollo";
import usePrevious from "use-previous";

import CreateStylesForm from "./CreateStylesForm";
import { CREATE_CRITICAL_STYLE } from "../Mutations";
import { PrimaryCard, Spinner } from "../Elements";
import CriticalStyles from "./CriticalStyles";

const AnimatedCard = animated(PrimaryCard);

function CreateStyles() {
  const card = useRef(null);
  const [css, setCSS] = useState("");
  const prevCSS = usePrevious(css);
  const [isOpen, setIsOpen] = useState(false);

  const handleOutput = output => {
    setCSS(output);
    setIsOpen(isOpen => !isOpen);
  };

  // spring configuration
  const { width, height, ...rest } = useSpring({
    config: config.stiff,
    from: {
      width: 480,
      height: 182
    },
    to: {
      width: isOpen ? 960 : 480,
      height: isOpen ? 960 : 182
    }
  });

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" }
  });

  return (
    <Mutation mutation={CREATE_CRITICAL_STYLE}>
      {(func, { loading }) => (
        <AnimatedCard style={{ height, width, ...rest }} ref={card}>
          {loading ? (
            <Spinner />
          ) : (
            transitions.map(({ item, key, props }) =>
              item ? (
                <animated.div style={props} key={key}>
                  <CriticalStyles
                    data={css}
                    prevData={prevCSS}
                    updateData={setCSS}
                  />
                </animated.div>
              ) : (
                <animated.div style={props} key={key}>
                  <CreateStylesForm
                    key={key}
                    onSubmit={func}
                    onOutput={handleOutput}
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
