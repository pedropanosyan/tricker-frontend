import {Stack, useRouter} from "expo-router";
import styles from "./styles";
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from "../../constants/theme";

export default () => {

    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTintColor: styles.headerStyle.color,
                headerLeft: () =>  (
                    <FontAwesome onPress={() => router.push('/modal')}
                                 name="bars" size={24} color={COLORS.white} style={{marginLeft: 16}}/>
                ),
                headerTitle: "Project name",
            }}
        >
            <Stack.Screen name="home" options={{
            }} />
            <Stack.Screen name="modal" options={{
                presentation: 'modal',
            }} />

        </Stack>
    )
}