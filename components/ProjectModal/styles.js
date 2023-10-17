import {StyleSheet} from "react-native";
import {COLORS, MARGIN, PADDING, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";

const styles = StyleSheet.create({
    projectName: {
        fontSize: SIZES.xxSmall,
        fontWeight: WEIGHTS.bold,
    },
    container: {
        alignSelf: 'center',
        width:"50%",
        top: SIZES.xLarge,
        position: "absolute",
        backgroundColor: COLORS.lightergray,
        padding: PADDING.xSmall,
        borderRadius: RADIUS.medium,
        marginTop: MARGIN.medium
    },
    projectNameContainer: {
        flexDirection: "row",
        gap: 8,
        padding: PADDING.xSmall,
        alignItems: "center",
    }

});

export default styles;