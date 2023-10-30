import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

interface IconProps {
    color?: string;
}

const PlayIcon = ({color="white"}: IconProps) => {




    return (
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <G clipPath="url(#clip0_129_603)">
                <Path d="M13.3333 8.33337V31.6667L31.6667 20L13.3333 8.33337Z" fill={color}/>
            </G>
            <Defs>
                <ClipPath id="clip0_129_603">
                    <Rect width="40" height="40" fill={color}/>
                </ClipPath>
            </Defs>
        </Svg>
    )

}

export default PlayIcon;