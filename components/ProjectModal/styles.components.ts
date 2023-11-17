import styled from "rn-css";
import {theme} from "../../styled-components/theme";

export const ModalContainer = styled.View`
  align-self: center;
  background-color: ${theme.white};
  padding: ${theme.spacing.xSmall};
  border-radius: ${theme.radius.medium};
  margin-top: ${theme.spacing.medium};
`;