import { StyleSheet } from "react-native";
import {COLORS, SIZES, WEIGHTS} from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
    imgContainer: {
        marginTop: SIZES.xLarge,
        width: "auto",
        height: "auto",
        justifyContent: "center",
        alignSelf: "center"
    },
    titleContainer: {
      alignItems: "center",
    },
    title: {
        fontWeight: WEIGHTS.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.white,
    },
    subtitle: {
        fontWeight: WEIGHTS.bolder,
        fontSize: SIZES.medium,
        color: COLORS.lightgray
    }


})

export default styles;