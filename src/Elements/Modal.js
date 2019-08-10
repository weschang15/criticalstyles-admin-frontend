import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import Portal from "./Portal";

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`;

const ModalCard = styled.div`
  background-color: #fff;
  max-width: 480px;
  position: relative;
  border-radius: 6px;
  padding: 1em;
  margin-top: 15%;
`;

const AnimatedCard = animated(ModalCard);

function Modal({ animation, close, children, forwardedRef }) {
  return (
    <AnimatedCard style={animation} ref={forwardedRef}>
      {children}
    </AnimatedCard>
  );
}

function ModalWrapper({ children, on, toggle }) {
  const card = useRef(null);

  const close = e => {
    // Allow user to click outside of modal to close it
    if (e.target === card.current.parentNode) {
      return toggle();
    }
  };

  const transitions = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" }
  });

  return (
    on && (
      <Portal>
        <Wrapper onClick={close}>
          {transitions.map(
            ({ item, key, props: animation }) =>
              item && (
                <Modal
                  key={key}
                  animation={animation}
                  close={toggle}
                  forwardedRef={card}
                >
                  {children}
                </Modal>
              )
          )}
        </Wrapper>
      </Portal>
    )
  );
}

ModalWrapper.propTypes = {
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired
};

export default ModalWrapper;
