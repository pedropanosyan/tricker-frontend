import {Alert, View } from "react-native"
import TrickerIcon from "../../assets/icons/components/TrickerIcon";
import GoogleIcon from "../../assets/icons/components/GoogleIcon";
import {LinearGradient} from "expo-linear-gradient";
import {
    ImageContainer,
    Subtitle,
    Title, TitleContainer,
    Text, useMyTheme, Row, OuterContainer, Box
} from "../../styled-components/styles";
import {LoginButton} from "./login.styles";
import { useAuth0 } from "react-native-auth0";
import {useRouter} from "expo-router";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addToken} from "../../store/features/tokenSlice";
import {getHello} from "../../api/request";

const Login = () => {

    const router = useRouter();
    const {authorize, user, error, getCredentials, isLoading} = useAuth0();

    const dispatch = useAppDispatch();

    const onLogin = async () => {
        try {
            await authorize();
            let credentials = await getCredentials();
            if (credentials) {
                const accessToken = credentials.accessToken;
                dispatch(addToken(accessToken));
                await getHello()
                router.push("/(home)")
            }
            else {
                Alert.alert("No credentials")
                await getHello()
                router.push("/(home)")
            }
        } catch (e) {
            console.log(e);
        }
    };

return (
        <LinearGradient
            colors={['#330000', '#000000', '#000000', '#000000', '#00AAFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{ flex: 1 }}
        >
            <Box height="100%" alignItems="space-aro" justifyContent="space-around">
                <View>
                    <ImageContainer>
                        <TrickerIcon size={108} color={"white"} />
                    </ImageContainer>
                    <TitleContainer>
                        <Title>TRICKER</Title>
                        <Subtitle>Let´s track your time</Subtitle>
                    </TitleContainer>
                </View>
                <Row rnCSS="align-self=center;">
                    <LoginButton onPress={() => onLogin()}>
                        <GoogleIcon  color={"white"} size={20}/>
                        <Text size="18">Continue with google</Text>
                    </LoginButton>
                </Row>
            </Box>
        </LinearGradient>
    )

}

export default Login