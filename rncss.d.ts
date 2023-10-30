import "rn-css";
import {Theme} from "./styled-components/theme";
declare module "rn-css" {
    export interface DefaultTheme extends Theme {
    }
}