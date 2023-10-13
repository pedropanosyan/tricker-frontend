import {Image, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import TrickerIcon from "../../assets/icons/components/TrickerIcon";

const Login = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.imgContainer}>
                    <TrickerIcon size={108} color={"white"} />
                </View>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>TRICKER</Text>
                    <Text style={styles.subtitle}>Let´s track your time</Text>
                </View>
            </View>
            <Text>Login</Text>
        </SafeAreaView>
    )

}

export default Login