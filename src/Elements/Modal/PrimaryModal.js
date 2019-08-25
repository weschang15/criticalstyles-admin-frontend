import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import Portal from "../Portal";

const ModalWrapper = styled.div`
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

const Card = styled.div`
  background-color: #fff;
  cursor: auto;
  max-width: 480px;
  min-height: 240px;
  position: relative;
  border-radius: 3px;
  margin-top: 15%;
`;

const AnimatedCard = animated(Card);

function ModalCard({ animation, children, forwardedRef }) {
  return (
    <AnimatedCard style={animation} ref={forwardedRef}>
      {children}
    </AnimatedCard>
  );
}

function PrimaryModal({ children, on, toggle }) {
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

  return transitions.map(
    ({ item, key, props: animation }) =>
      item && (
        <Portal key={key}>
          <ModalWrapper onClick={close}>
            <ModalCard animation={animation} close={toggle} forwardedRef={card}>
              {children}
            </ModalCard>
          </ModalWrapper>
        </Portal>
      )
  );
}

PrimaryModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired
};

export default PrimaryModal;
