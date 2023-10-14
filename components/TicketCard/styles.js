import {StyleSheet} from "react-native";
import {COLORS, PADDING, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";

const styles = StyleSheet.create({

    statusContainer: {
        flexDirection: "row",
        marginTop: 8,
        justifyContent: "flex-end",
    },
    statusText: {
        fontSize: SIZES.xSmall,
        fontWeight: WEIGHTS.bolder,
    },
    status: {
        backgroundColor: COLORS.orange,
        paddingHorizontal: PADDING.medium,
        paddingVertical: PADDING.xxSmall,
        borderTopLeftRadius: RADIUS.medium,
        borderTopRightRadius: RADIUS.medium,
    },
    ticketContainer: {
        backgroundColor: COLORS.backgroundGray,
        padding: PADDING.medium,
        borderWidth: 2,
        rowGap: 11,
        borderColor: COLORS.orange,
        borderBottomLeftRadius: RADIUS.medium,
        borderBottomRightRadius: RADIUS.medium,
        borderTopLeftRadius: RADIUS.medium,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.xxSmall,
        fontWeight: WEIGHTS.bold700
    },
    description: {
        color: COLORS.white,
        fontSize: SIZES.xxSmall,
        fontWeight: WEIGHTS.bold
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
        alignItems: "center",
    },
    footerIcon: {
        flexDirection: "row",
        gap: 8
    },
    box1: {
        backgroundColor: COLORS.lightBlue,
        width: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    box2: {
        backgroundColor: COLORS.lightgray,
        width: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    box3: {
        backgroundColor: COLORS.backgroundGray,
        width: 24,
        borderRadius: RADIUS.large,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        fontSize: SIZES.xxSmall,
        fontWeight: WEIGHTS.bold700,
    },
    ticketId: {
        fontSize: 14,
        fontWeight: WEIGHTS.bolder,
        color: COLORS.lightgray,
    }
});

export default styles;