import {StyleSheet} from "react-native";
import {COLORS, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";
import linearGradientNativeComponent from "react-native-svg/src/fabric/LinearGradientNativeComponent";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black,
    },
    secondaryContainer:{
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    projectSelection: {
        flexDirection:"row",
        alignItems: "center",
        gap:8
    },
    antIcon: {
        alignSelf: "center"
    },
    projectText: {
        fontSize: SIZES.small,
        fontWeight: WEIGHTS.bold,
        color: "white"
    },
    profileIcon: {
        borderRadius: RADIUS.large,
        borderWidth: 3,
        borderColor: "#A12BFF"
    }
});

export default styles;