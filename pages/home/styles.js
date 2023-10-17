import {COLORS, MARGIN} from "../../constants/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        maxHeight: '100vh',
    },
    ticketsContainer: {
        width: '90vw',
        alignSelf: "center",
        overflow: "scroll",
        maxHeight: '65vh',
    },
    optionsContainer: {
        marginTop: MARGIN.medium,
        marginBottom: MARGIN.medium,
        marginLeft: MARGIN.xxSmall,
        flexDirection: "row",
    },
    timerContainer: {

    }
})

export default styles;