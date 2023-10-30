import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const StopIcon = () => {

    return (
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <G clipPath="url(#clip0_129_603)">
                <Path d="M10 10H30V30H10V10Z" fill="#2B2B2B"/>
            </G>
            <Defs>
                <ClipPath id="clip0_129_603">
                    <Rect width="40" height="40" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default StopIcon;