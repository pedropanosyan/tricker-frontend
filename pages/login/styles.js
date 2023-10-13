import { StyleSheet } from "react-native";
import {COLORS, PADDING, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
    },
    linearGradient: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        rotateX: '45deg'
    },
    imgContainer: {
        width: "auto",
        height: "auto",
        justifyContent: "center",
        alignSelf: "center"
    },
    titleContainer: {
      marginTop: SIZES.medium,
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
    },
    signInForm: {
        alignSelf: "center",
        alignItems: "center",
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: RADIUS.medium,
        flexDirection: "row",
        paddingHorizontal: PADDING.small,
        paddingVertical: PADDING.small,
        width: "80vw",
        gap: SIZES.small,
        backgroundColor: COLORS.backgroundGray
    },
    signInText: {
        color: COLORS.white,
        fontSize: SIZES.small,
    }


})

export default styles;