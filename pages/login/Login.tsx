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

const Login = () => {

    const router = useRouter();
    const {authorize, user, error, getCredentials, isLoading} = useAuth0();

    const onLogin = async () => {
        try {
            await authorize();
            let credentials = await getCredentials();
            if (credentials) {
                Alert.alert(credentials.accessToken)
                router.push("/(home)") }
            else { Alert.alert("No credentials") }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={{backgroundColor: "black"}}>
        <LinearGradient
            colors={['#006600', '#000000', '#330000', '#000066']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <OuterContainer>
                <Box alignItems="space-around">
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
            </OuterContainer>
        </LinearGradient>
        </View>
    )

}

export default Login