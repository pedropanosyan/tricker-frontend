import styled from "rn-css";
import {COLORS, PADDING, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";



export const StatusContainer = styled.View<{bg?: string}>`
  background-color: ${props => props.bg || COLORS.orange};
  padding: ${PADDING.xxSmall} ${PADDING.medium};
  border-top-left-radius: ${RADIUS.medium};
  border-top-right-radius: ${RADIUS.medium};
`;

export const TicketContainer = styled.View<{color?: string}>`
  background-color: ${COLORS.backgroundGray};
  padding: ${PADDING.medium};
  border-width: 2px;
  border-color: ${props => props.color || COLORS.orange};
  border-bottom-left-radius: ${RADIUS.medium};
  border-bottom-right-radius: ${RADIUS.medium};
  border-top-left-radius: ${RADIUS.medium};
  row-gap: 11px;
`;

