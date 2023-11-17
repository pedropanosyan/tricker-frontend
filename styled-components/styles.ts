import styled, {DefaultTheme, useTheme} from "rn-css";
import {theme} from "./theme";


export const OuterContainer = styled.View<{bg?: string}>`
    flex: 1;
    background-color: ${props => props.bg || theme.black};
    width: auto;
`;

export const Box = styled.View<{bg?: string, padding?: string, width?: string, height?: string, gap?: string, justifyContent?: string, alignItems?: string}>`
    background-color: ${props => props.bg || 'transparent'};
    padding: ${props => props.padding || '0px'};
    width: ${props => props.width || 'auto'};
    gap: ${props => props.gap || '0px'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
`;

export const Row = styled(Box)<{gap?: string}>`
    flex-direction: row;
    gap: ${props => props.gap || '0px'};
`;

export const Column = styled(Box)<{gap?: string}>`
    gap: ${props => props.gap || '0px'};
`;

export const TouchableRow = styled.TouchableOpacity<{gap?: string, padding?:string, bg?:string}>`
    flex-direction: row;
    align-items: center;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.bg || 'transparent'};
`;


export const InlineColumn = styled(Column)`
  display: inline-flex;
`;

export const ImageContainer = styled.View`
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-weight: 400;
    font-size: 56px;
    color: ${theme.white};
`;

export const Subtitle = styled.Text`
    font-weight: 500;
    font-size: 20px;
    color: ${theme.lightergray};
`;

export const TitleContainer = styled.View`
    margin-top: 20px;
    align-items: center;
`;

export const Text = styled.Text<{color?: string, size?: string, weight?: string}>`
    font-size: ${props => props.size || '16px'};
    color: ${props => props.color || theme.white};
    font-weight: ${props => props.weight || 400};
`;

export const IconContainer = styled.TouchableOpacity<{bg?: string, radius?: string, padding?: string, opacity?: string}>`
    border-radius: ${props => props.radius || '50px'};
    background: ${props => props.bg || "transparent"};
    padding: ${props => props.padding || '8px'};
    align-items: center;
    justify-content: center;
    opacity: ${props => props.opacity || '1'};
`;

export const Border = styled.View<{color?:string, side?:string, width?:string}>`
    border-${props => props.side || 'bottom'}-width: ${props => props.width || '1px'};
    border-color: ${props => props.color || theme.lightergray};
`;

export const VerticalLine = styled.View<{color?:string, width?:string, height?:string}>`
    border-left-width: ${props => props.width || '1px'};
    border-color: ${props => props.color || theme.lightergray};
    align-self: center;
    box-sizing: content-box;
    height: ${props => props.height || '100%'};
  
`;

export const useMyTheme = () => {
    return useTheme() as DefaultTheme;
}