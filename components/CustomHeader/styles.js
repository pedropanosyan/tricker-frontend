import {StyleSheet} from "react-native";
import {COLORS, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.blackSecondary,
        borderBottomColor: COLORS.backgroundGray,
        borderBottomWidth: 1,
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
        borderColor: COLORS.violet
    }
});

export default styles;