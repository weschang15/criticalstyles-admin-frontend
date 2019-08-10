import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Portal from "./Portal";

function Modal(props = {}) {
  const card = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.removeAttribute("style");
    };
  }, []);

  const close = e => {
    if (e.target === card.current.parentNode) {
      return toggle();
    }
  };

  const { children, toggle } = props;

  return (
    <Portal>
      <ModalWrapper onClick={close}>
        <ModalCard ref={card}>{children}</ModalCard>
      </ModalWrapper>
    </Portal>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  z-index: 9;
`;

const ModalCard = styled.div`
  flex: 1;
  max-width: 480px;
  position: relative;
  border-radius: 3px;
  padding: 1em;
`;

Modal.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default Modal;
