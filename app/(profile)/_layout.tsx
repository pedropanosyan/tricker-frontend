import {Stack, useRouter} from "expo-router";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {Row, Text, useMyTheme} from "../../styled-components/styles";

export default () => {

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Stack screenOptions={{
            header: () => (<ProfileHeader />),
            headerShown: true
        }}>
        </Stack>
    )
}

const ProfileHeader = () => {

    const theme = useMyTheme();


    return (
        <Row rnCSS="padding-top:36px;" alignItems="center" justifyContent="center" padding="16px" bg={theme.black}>
            <Text size="18px">My account</Text>
        </Row>
    )
}