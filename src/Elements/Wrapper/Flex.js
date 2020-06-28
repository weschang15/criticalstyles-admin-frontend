import PropTypes from "prop-types";
import styled from "styled-components";
import { addProperty } from "../../Utils";
import {
  ALIGN_ITEMS,
  FLEX_DIRECTION,
  FLEX_WRAP,
  JUSTIFY_CONTENT
} from "../common";

const Flex = styled.div`
  display: flex;
  ${({ alignItems }) => addProperty("align-items", alignItems)}
  ${({ justifyContent }) => addProperty("justify-content", justifyContent)}
`;

Flex.propTypes = {
  flexWrap: PropTypes.oneOf(FLEX_WRAP),
  flexDirection: PropTypes.oneOf(FLEX_DIRECTION),
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT)
};

export default Flex;
