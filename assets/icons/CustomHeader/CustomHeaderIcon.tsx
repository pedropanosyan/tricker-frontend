import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";
import {IconProps} from "../../../utils/types";

const CustomHeaderIcon = ({ size=24, color="white"}: IconProps) => {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <G clipPath="url(#clip0_144_893)">
                <Path d="M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z" fill="white"/>
            </G>
            <Defs>
                <ClipPath id="clip0_144_893">
                    <Rect width="24" height="24" fill={color}/>
                </ClipPath>
            </Defs>
        </Svg>
    )

}

export default CustomHeaderIcon;