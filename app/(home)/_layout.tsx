import {Stack, useRouter} from "expo-router";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {SafeAreaView} from "react-native";
import {ScreenStackHeaderSearchBarView} from "react-native-screens";
import {useMyTheme} from "../../styled-components/styles";

export default () => {

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const theme = useMyTheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: theme.blackSecondary }
            }}
        >
        </Stack>
    )
}