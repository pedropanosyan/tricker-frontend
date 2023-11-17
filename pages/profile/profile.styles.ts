import styled from "rn-css";
import { theme } from "../../styled-components/theme";


export const StatusBox = styled.View<{color: string}>`
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    padding: ${theme.spacing.xSmall};
    border: 1px solid ${props => props.color};
    border-radius: 8px;
`;

export const StatusNumber = styled.Text<{color: string}>`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
`;

export const StatusText = styled.Text<{color: string}>`
    font-size: 12px;
    color: ${props => props.color};
`;

export const ImageContainer = styled.View`
    top: 56px;
    position: absolute;
    align-self: center;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;