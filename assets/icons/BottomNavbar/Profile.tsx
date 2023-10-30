import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const ProfileIcon = () => {

    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clipPath="url(#clip0_140_860)">
                <Path d="M16 16C18.9466 16 21.3333 13.6134 21.3333 10.6667C21.3333 7.72004 18.9466 5.33337 16 5.33337C13.0533 5.33337 10.6666 7.72004 10.6666 10.6667C10.6666 13.6134 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33331 20.4534 5.33331 24V26.6667H26.6666V24C26.6666 20.4534 19.56 18.6667 16 18.6667Z" fill="white"/>
            </G>
            <Defs>
                <ClipPath id="clip0_140_860">
                    <Rect width="32" height="32" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )

}

export default ProfileIcon;