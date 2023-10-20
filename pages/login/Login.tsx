import {SafeAreaView, TouchableOpacity, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import TrickerIcon from "../../assets/icons/components/TrickerIcon";
import GoogleIcon from "../../assets/icons/components/GoogleIcon";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";
import { router } from 'expo-router';
import {
    GlobalContainer,
    ImageContainer, Row,
    Subtitle,
    Title, TitleContainer,
    VerticalSpaceAround, Text
} from "../../styled-components/components.styles";
import {ThemeProvider} from "rn-css";
import {COLORS} from "../../constants/theme";
import {LoginButton} from "./login.styles";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {

    const [accessToken, setAccessToken] = useState<string>('')
    const [user, setUser] = useState(undefined)
    const [token, setToken] = useState('')

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "823502041656-n7ev10pcpttq2db9h5b0f069mqbpdokl.apps.googleusercontent.com",
        webClientId: "823502041656-6d8tl1h84k4qdti7te45t7coskgu2b1g.apps.googleusercontent.com",
    });

    useEffect(() => {
        if (response?.type === 'success') {
            setAccessToken(response?.authentication?.accessToken ?? '');
            accessToken && fetchUserInfo()

        }
    }, [response, accessToken]);

    const fetchUserInfo = async () => {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
      const userInfo = await response.json();
      const dataToSend = { id: userInfo.id, name: userInfo.name, email: userInfo.email };
      try {
          const res = await fetch('http://localhost:8080/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(dataToSend)
          })
          setUser(userInfo)
          console.log("res", res)
          router.replace('/(home)')
      } catch (e) {
          console.log(e)
      }
    }

    return (
            <LinearGradient
                colors={['#006600', '#000000', '#330000', '#000066']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <GlobalContainer>
                    <VerticalSpaceAround>
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
                        <LoginButton onPress={() => promptAsync()}>
                            <GoogleIcon  color={"white"} size={20}/>
                            <Text size="18">Continue with google</Text>
                        </LoginButton>
                        </Row>
                    </VerticalSpaceAround>
                </GlobalContainer>
            </LinearGradient>
    )

}

export default Login