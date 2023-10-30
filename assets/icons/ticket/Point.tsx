import Svg, {Circle} from "react-native-svg";
import {IconProps} from "../../../constants/types";



const PointIcon = ({ color="#DEDEDE" }: IconProps) => {

    return (
        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <Circle cx="7" cy="7" r="7" fill={color}/>
        </Svg>
    )

}

export default PointIcon;