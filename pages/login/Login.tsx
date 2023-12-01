import {Alert, View } from "react-native"
import TrickerIcon from "../../assets/icons/components/TrickerIcon";
import GoogleIcon from "../../assets/icons/components/GoogleIcon";
import {LinearGradient} from "expo-linear-gradient";
import {
    ImageContainer,
    Title,
    useMyTheme, Row, Box, StyledBox, StyledTypography, StyledRow
} from "../../styled-components/styles";
import {LoginButton} from "./login.styles";
import { useAuth0 } from "react-native-auth0";
import {useRouter} from "expo-router";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addToken} from "../../store/features/tokenSlice";
import {getHello} from "../../api/request";
import {theme} from "../../styled-components/theme";

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
            <StyledBox css={{ height: "100%", justifyContent: "space-around" }}>
                <StyledBox css={{ alignItems: "center", justifyContent: "center" }}>
                    <StyledBox>
                        <TrickerIcon size={108} color={"white"} />
                    </StyledBox>
                    <StyledBox css={{ marginTop: "30px", gap:"8px", alignItems: "center" }}>
                        <StyledTypography css={{ color: "white" }} variant="h1">TRICKER</StyledTypography>
                        <StyledTypography css={{ color: "white" }} variant="h3">Let´s track your time</StyledTypography>
                    </StyledBox>
                </StyledBox>
                <StyledRow css={{ alignSelf: "center" }} >
                    <LoginButton onPress={() => onLogin()}>
                        <GoogleIcon  color={"white"} size={20}/>
                        <StyledTypography css={{ color: "white" }} variant="h3">Continue with google</StyledTypography>
                    </LoginButton>
                </StyledRow>
            </StyledBox>
        </LinearGradient>
    )

}

export default Login