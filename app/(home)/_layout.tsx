import {Stack, useRouter} from "expo-router";
import styles from "./styles";
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

export default () => {

    const router = useRouter();

    return (
        <Stack screenOptions={{
            header: () => (<CustomHeader />),
            headerShown: true
        }}>
        </Stack>
    )
}