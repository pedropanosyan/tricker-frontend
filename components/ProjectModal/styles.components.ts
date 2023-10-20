import styled from "rn-css";
import {COLORS, MARGIN, PADDING, RADIUS, SIZES} from "../../constants/theme";

export const ModalContainer = styled.View`
  align-self: center;
  width: 50%;
  top: ${SIZES.xLarge};
  position: absolute;
  background-color: ${COLORS.lightergray};
  padding: ${PADDING.xSmall};
  border-radius: ${RADIUS.medium};
  margin-top: ${MARGIN.medium};
`;