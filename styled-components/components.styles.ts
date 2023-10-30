import styled, {DefaultTheme, useTheme} from "rn-css";
import { COLORS } from "../constants/theme";


export const GlobalContainer = styled.View<{}>`
    flex: 1;
  
`;

export const RowAlignedCenter = styled.View<{gap?: string, padding?:string, bg?:string, inline?:string}>`
    flex-direction: row;
    display: ${props => props.inline || 'flex'};
    align-items: center;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.bg || 'transparent'};
`;

export const Row = styled(RowAlignedCenter)`
  align-items: flex-start;
`;


export const TouchableRow = styled.TouchableOpacity<{gap?: string, padding?:string, bg?:string}>`
    flex-direction: row;
    align-items: center;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.bg || 'transparent'};
`;

export const Column = styled.View<{gap?: string, padding?: string, width?:string, bg?:string}>`
    flex-direction: column;
    width: ${props => props.width || '100%'};
    background-color: ${props => props.bg || 'transparent'};
    padding: ${props => props.padding || '0px'};
    gap: ${props => props.gap || '0px'};
  
`;

export const InlineColumn = styled(Column)`
  display: inline-flex;
`;

export const RowSpaceBetween = styled(RowAlignedCenter)`
    justify-content: space-between;
`;

export const RowFlexEnd = styled(RowAlignedCenter)`
    justify-content: flex-end;
`;

export const VerticalSpaceAround = styled.View`
    height: 100%;
    justify-content: space-around;
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
    color: ${COLORS.white};
`;

export const Subtitle = styled.Text`
    font-weight: 500;
    font-size: 20px;
    color: ${COLORS.lightergray};
`;

export const TitleContainer = styled.View`
    margin-top: 20px;
    align-items: center;
`;

export const Text = styled.Text<{color?: string, size?: string, weight?: string}>`
    font-size: ${props => props.size || '16px'};
    color: ${props => props.color || COLORS.white};
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
    border-color: ${props => props.color || COLORS.lightergray};
`;

export const VerticalLine = styled.View<{color?:string, width?:string, height?:string}>`
    border-left-width: ${props => props.width || '1px'};
    border-color: ${props => props.color || COLORS.lightergray};
    align-self: center;
    box-sizing: content-box;
    height: ${props => props.height || '100%'};
  
`;

export const useMyTheme = () => {
    return useTheme() as DefaultTheme;
}