import {COLORS, MARGIN} from "../../constants/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        height: '100vh',
    },
    ticketsContainer: {
        width: '90vw',
        alignSelf: "center"
    },
    optionsContainer: {
        marginTop: MARGIN.medium,
        marginBottom: MARGIN.medium,
        marginLeft: MARGIN.xxSmall,
        flexDirection: "row",
    },
})

export default styles;