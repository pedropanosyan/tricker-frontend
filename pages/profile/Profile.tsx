import {Box, Column, OuterContainer, Row, Text, useMyTheme} from "../../styled-components/styles";
import {SafeAreaView, View} from "react-native";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import {ImageContainer, StatusBox, StatusNumber, StatusText, Image} from "./profile.styles";

const Profile = () => {

    const theme = useMyTheme();

    return (
        <OuterContainer>
            <Column bg={theme.gray} rnCSS="height:12vh;padding-top:16px;">
                <ImageContainer>
                    <Image
                        source={require('../../assets/images/profile-image.png')}
                    />
                </ImageContainer>

            </Column>
            <Box alignItems="center" rnCSS="height:75vh;z-index:-1;" bg={theme.black}>
                <Box alignItems="center" rnCSS="margin-top:64px;margin-bottom:16px;">
                    <Text size="24px" weight="700">First name long</Text>
                    <Text size="24px">Last name</Text>
                </Box>
                <Row justifyContent="center" gap="16">
                    <StatusBox color={theme.backgroundGray}>
                        <StatusNumber color={theme.black}>8</StatusNumber>
                        <StatusText color={theme.black}>To do</StatusText>
                    </StatusBox>
                    <StatusBox color={theme.orange}>
                        <StatusNumber color={theme.black} >1</StatusNumber>
                        <StatusText color={theme.black}>In progress</StatusText>
                    </StatusBox>
                    <StatusBox color={theme.lightBlue}>
                        <StatusNumber color={theme.black}>7</StatusNumber>
                        <StatusText color={theme.black} >Completed</StatusText>
                    </StatusBox>
                </Row>
            </Box>
            <BottomNavbar />
        </OuterContainer>
    )


}

export default Profile;