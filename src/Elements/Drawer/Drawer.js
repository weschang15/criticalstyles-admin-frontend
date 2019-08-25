import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import Portal from "../Portal";
import Icons from "../Icons";
import { transparentize, darken } from "polished";

const DrawerWrapper = styled.aside`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 15px ${({ theme }) => transparentize(0.85, theme.black)};
  cursor: auto;
  height: 100%;
  margin-left: auto;
  max-width: 840px;
  position: relative;
  width: 100%;
  padding: 1em;
`;

const AnimatedCard = animated(Card);

const CloseIcon = styled(Icons)`
  cursor: pointer;
  fill: ${({ theme }) => darken(0.25, theme.gray)};
  &:focus,
  &:hover {
    fill: ${({ theme }) => theme.blue};
  }
`;

function DrawerInner({ animation, children, close, forwardedRef }) {
  return (
    <AnimatedCard style={animation} ref={forwardedRef}>
      <CloseIcon icon="close" width="20px" onClick={close} />
      {children}
    </AnimatedCard>
  );
}

function Drawer({ children, on, toggle }) {
  const card = useRef(null);

  const transitions = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(100%, 0, 0)" }
  });

  const close = e => {
    // Allow user to click outside of modal to close it
    if (e.target === card.current.parentNode) {
      return toggle();
    }
  };

  return transitions.map(
    ({ item, key, props: animation }) =>
      item && (
        <Portal key={key}>
          <DrawerWrapper onClick={close}>
            <DrawerInner
              animation={animation}
              close={toggle}
              forwardedRef={card}
            >
              {children}
            </DrawerInner>
          </DrawerWrapper>
        </Portal>
      )
  );
}

Drawer.propTypes = {
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired
};

export default Drawer;
