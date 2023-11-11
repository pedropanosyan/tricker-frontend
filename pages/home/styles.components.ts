import styled from "rn-css";
import {theme} from "../../styled-components/theme";

export const TicketsContainer = styled.View<{clockActive: boolean}>`
  width: 90vw;
  align-self: center;
  overflow: scroll;
  gap: 16px;
  margin-bottom: ${props => props.clockActive ? '156px' : '64px'};
`;

export const TimerContainer = styled.TouchableHighlight`
    width: 100vw;
    position: fixed;
    align-self: center;
    flex: 1;
    bottom: 55px;
    background-color: ${theme.blackSecondary};
    backdrop-filter: blur(12px);

`;