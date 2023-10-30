import styled from "rn-css";
import {COLORS} from "../../constants/theme";

export const TicketsContainer = styled.View<{clockActive: boolean}>`
  width: 90vw;
  align-self: center;
  overflow: scroll;
  gap: 16px;
  margin-bottom: ${props => props.clockActive ? '100px' : '8px'};
`;

export const TimerContainer = styled.View`
    width: 100vw;
    position: fixed;
    align-self: center;
    flex: 1;
    bottom: 55px;
    background-color: ${COLORS.blackSecondary};
    backdrop-filter: blur(12px);

`;