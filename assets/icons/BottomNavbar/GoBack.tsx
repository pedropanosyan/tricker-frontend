import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const GoBackIcon = () => {

    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clipPath="url(#clip0_140_856)">
                <Path d="M17.3333 4C10.7066 4 5.33331 9.37333 5.33331 16H1.33331L6.51998 21.1867L6.61331 21.3733L12 16H7.99998C7.99998 10.84 12.1733 6.66667 17.3333 6.66667C22.4933 6.66667 26.6666 10.84 26.6666 16C26.6666 21.16 22.4933 25.3333 17.3333 25.3333C14.76 25.3333 12.4266 24.28 10.7466 22.5867L8.85331 24.48C11.0266 26.6533 14.0133 28 17.3333 28C23.96 28 29.3333 22.6267 29.3333 16C29.3333 9.37333 23.96 4 17.3333 4ZM16 10.6667V17.3333L21.7066 20.72L22.6666 19.1067L18 16.3333V10.6667H16Z" fill="white"/>
            </G>
            <Defs>
                <ClipPath id="clip0_140_856">
                    <Rect width="32" height="32" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    )

}

export default GoBackIcon;