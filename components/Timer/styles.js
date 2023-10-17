import {StyleSheet} from "react-native";
import {COLORS, PADDING, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: PADDING.medium,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.blackSecondary
    },
    ticketId: {
        color: COLORS.lightgray,
        fontWeight: WEIGHTS.bolder,
        fontSize: SIZES.xxSmall
    },
    time: {
        fontSize: 26,
        fontWeight: WEIGHTS.bold700,
        color: COLORS.white
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    iconContainer: {
        backgroundColor: COLORS.blackTertiary,
        borderRadius: RADIUS.large,
        padding: PADDING.xSmall
    },
    playContainer: {
        borderRadius: RADIUS.large,
        padding: PADDING.xSmall,
    }
})

export default styles;