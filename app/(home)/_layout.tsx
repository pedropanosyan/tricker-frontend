import {Stack, useRouter} from "expo-router";
import styles from "./styles";
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default () => {

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Stack screenOptions={{
            header: () => (<CustomHeader />),
            headerShown: true
        }}>
            <Stack.Screen name="/"/>
        </Stack>
    )
}