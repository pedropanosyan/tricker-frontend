import styled from "rn-css";
import {SIZES} from "../../constants/theme";
import {theme} from "../../styled-components/theme";

export const ModalContainer = styled.View`
  width: 50%;
  top: ${SIZES.xLarge};
  position: fixed;
  background-color: ${theme.lightgray};
  padding: ${theme.spacing.xSmall};
  border-radius: ${theme.radius.medium};
  margin-top: ${theme.spacing.medium};
`;