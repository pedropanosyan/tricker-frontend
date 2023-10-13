import {View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {COLORS} from "../../constants/theme";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {white} from "colorette";
import styles from "./styles";



const CustomHeader = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.secondaryContainer}>
                <FontAwesome name="bars" size={24} color="white" />
                <TouchableOpacity onPress={() => {}} style={styles.projectSelection}>
                    <AntDesign style={styles.antIcon} name="down" size={20} color="white" />
                    <Text style={styles.projectText}>Project name</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.profileIcon}>
                        <FontAwesome  name="user-circle" size={24} color="white" />
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

export default CustomHeader;