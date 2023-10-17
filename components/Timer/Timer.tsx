import {Text, TouchableOpacity, View} from "react-native";
import AddIcon from "../../assets/icons/components/AddIcon";
import FlagIcon from "../../assets/icons/components/FlagIcon";
import PlayIcon from "../../assets/icons/components/PlayIcon";
import styles from "./styles";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../../constants/theme";


const Timer = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.ticketId}>TKT-000</Text>
                <Text style={styles.time}>00:00hs</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AddIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <FlagIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient style={styles.playContainer} colors={[COLORS.violet, COLORS.lightBlue]}>
                        <PlayIcon />
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    )

}

export default Timer;