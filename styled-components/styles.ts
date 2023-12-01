import styled, {DefaultTheme, useTheme} from "rn-css";
import {theme} from "./theme";
import {TypographyVariant} from "../utils/types";
import {JSToCSS} from "../utils/helpers";
import {Pressable, View} from "react-native";

export interface StyledTextProps {
    css?: { [x: string]: any }
}

export interface Typography extends StyledTextProps {
    variant?: TypographyVariant
}

export const StyledTypography = styled.Text.attrs<Typography>((props) => ({
    variant: props.variant ?? "body1",
}))`
    color: ${(props) => props.theme.white};
    ${(props) => props.variant && JSToCSS(props.theme.typographyVariant[props.variant])};
    ${(props) => props.css && JSToCSS(props.css)};
`

export const StyledBox = styled(View)<StyledTextProps>`
    ${(props) => props.css && JSToCSS(props.css)}
`;

export const StyledRow = styled(View)<StyledTextProps>`
    display: flex;
    flex-direction: row;
    ${(props) => props.css && JSToCSS(props.css)}
`;

export const StyledColumn = styled(View)<StyledTextProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.css && JSToCSS(props.css)}
`;

export const StyledInteractiveBox = styled(Pressable)<StyledTextProps>`
    ${(props) => props.css && JSToCSS(props.css)}
`;

export const StyledImage = styled.Image<StyledTextProps>`
    ${(props) => props.css && JSToCSS(props.css)}
`;

export const useMyTheme = () => {
    return useTheme() as DefaultTheme;
}