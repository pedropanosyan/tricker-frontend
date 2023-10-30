import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

interface IconProps {
    color: string;
}


const CompletedIcon = ({color='white'}:IconProps) => {

    return (
        <Svg width="38" height="38" viewBox="0 0 32 32" fill="none">
            <G clipPath="url(#clip0_120_197)">
                <Path d="M12 21.56L6.43999 16L4.54666 17.88L12 25.3334L28 9.33337L26.12 7.45337L12 21.56Z" fill={color}/>
            </G>
            <Defs>
                <ClipPath id="clip0_120_197">
                    <Rect width="32" height="32" fill={color}/>
                </ClipPath>
            </Defs>
        </Svg>
    )

}

export default CompletedIcon;