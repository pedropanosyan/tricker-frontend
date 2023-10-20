import styled from "rn-css";
import { COLORS } from "../constants/theme";


export const GlobalContainer = styled.View<{bg?: string}>`
    flex: 1;
    background-color: ${props => props.bg || 'transparent'};
  
`;

export const Row = styled.View<{gap?: string, padding?:string, bg?:string}>`
    flex-direction: row;
    align-items: center;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.bg || 'transparent'};
`;

export const TouchableRow = styled.TouchableOpacity<{gap?: string, padding?:string, bg?:string}>`
    flex-direction: row;
    align-items: center;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.bg || 'transparent'};
`;

export const Column = styled.View<{width?:string}>`
    flex-direction: column;
    width: ${props => props.width || '100%'};
`;

export const RowSpaceBetween = styled(Row)`
    justify-content: space-between;
    ;
`;

export const RowFlexEnd = styled(Row)`
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
    background: ${props => props.bg || COLORS.blackTertiary};
    padding: ${props => props.padding || '8px'};
    align-items: center;
    justify-content: center;
    opacity: ${props => props.opacity || '1'};
`;
