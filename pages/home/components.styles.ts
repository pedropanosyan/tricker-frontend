import styled from "rn-css";
import {theme} from "../../styled-components/theme";

export const TicketsContainer = styled.View<{clockActive: boolean}>`
  width: 90vw;
  align-self: center;
  overflow: scroll;
  gap: 16px;
  // margin-bottom: ${props => props.clockActive ? '156px' : '56px'};
  max-height: ${props => props.clockActive ? '70vh' : '78vh'};
`;

export const TimerContainer = styled.TouchableHighlight`
    width: 100vw;
    position: fixed;
    align-self: center;
    bottom: 0;
    background-color: ${theme.blackSecondary};
    backdrop-filter: blur(12px);

`;