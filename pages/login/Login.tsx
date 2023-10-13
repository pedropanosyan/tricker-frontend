import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import styles from "./styles";
import TrickerIcon from "../../assets/icons/components/TrickerIcon";
import GoogleIcon from "../../assets/icons/components/GoogleIcon";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";


WebBrowser.maybeCompleteAuthSession();

const Login = () => {

    const [accessToken, setAccessToken] = useState<string>('')
    const [user, setUser] = useState(undefined)
    
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '823502041656-n7ev10pcpttq2db9h5b0f069mqbpdokl.apps.googleusercontent.com',
        webClientId: '823502041656-6d8tl1h84k4qdti7te45t7coskgu2b1g.apps.googleusercontent.com',
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
      setUser(userInfo)
    }
    
    return (
        <LinearGradient
            colors={['#006600', '#000000', '#330000', '#000066']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearGradient}
        >
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
                <TouchableOpacity onPress={() => promptAsync()} style={styles.signInForm}>
                    <GoogleIcon  color={"white"} size={20}/>
                    <Text style={styles.signInText}>Continue with google</Text>
                </TouchableOpacity>
        </SafeAreaView>
        </LinearGradient>
    )

}

export default Login