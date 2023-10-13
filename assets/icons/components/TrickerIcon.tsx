import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg"
import {View} from "react-native";
import {color} from "ansi-fragments";

interface IconProps {
    size: number;
    color: string;
}



export default function TrickerIcon({size=24, color="white"}: IconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 109 108" fill="none">
            <G clipPath="url(#clip0_30_811)">
                <Path fillRule="evenodd" clipRule="evenodd" d="M84.5675 65.9999V41.9999C84.5675 25.4314 71.1058 11.9999 54.5 11.9999C37.8942 11.9999 24.4325 25.4314 24.4325 41.9999V65.9999C24.4325 82.5685 37.8942 95.9999 54.5 95.9999C71.1058 95.9999 84.5675 82.5685 84.5675 65.9999ZM54.5 -6.10352e-05C31.2519 -6.10352e-05 12.4055 18.804 12.4055 41.9999V65.9999C12.4055 89.1959 31.2519 108 54.5 108C77.7482 108 96.5945 89.1959 96.5945 65.9999V41.9999C96.5945 18.804 77.7482 -6.10352e-05 54.5 -6.10352e-05Z" fill={color}/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M60.5945 66.0755V41.9243C60.5945 38.5897 57.8659 35.8865 54.5 35.8865C51.1341 35.8865 48.4055 38.5897 48.4055 41.9243V66.0755C48.4055 69.4101 51.1341 72.1133 54.5 72.1133C57.8659 72.1133 60.5945 69.4101 60.5945 66.0755ZM54.5 23.8109C44.4023 23.8109 36.2166 31.9206 36.2166 41.9243V66.0755C36.2166 76.0793 44.4023 84.1889 54.5 84.1889C64.5977 84.1889 72.7835 76.0793 72.7835 66.0755V41.9243C72.7835 31.9206 64.5977 23.8109 54.5 23.8109Z" fill={color}/>
            </G>
            <Defs>
                <ClipPath id="clip0_30_811">
                    <Rect width="108" height="108" fill="white" transform="translate(0.5)"/>
                </ClipPath>
            </Defs>
        </Svg>
    );
}