import React, { useState, useRef } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import useMeasure from "use-measure";
import { Mutation } from "react-apollo";

import CreateStylesForm from "./CreateStylesForm";
import { CREATE_CRITICAL_STYLE } from "../Mutations";
import { PrimaryCard, Spinner, Textarea } from "../Elements";
import CriticalStyles from "./CriticalStyles";

const AnimatedCard = animated(PrimaryCard);
const AnimatedTextarea = animated(Textarea);

function CreateStyles() {
  const card = useRef(null);
  const cardMeasurements = useMeasure(card);

  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const set = css => {
    setData(css);
    setOpen(open => !open);
  };

  // spring configuration
  const { width, height, ...rest } = useSpring({
    from: {
      width: 480,
      height: 96
    },
    to: {
      width: open ? 960 : 480,
      height: open ? 960 : 96
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
        <AnimatedCard style={{ height, width, ...rest }} ref={card}>
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
