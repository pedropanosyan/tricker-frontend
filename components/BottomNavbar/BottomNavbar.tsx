import {IconContainer, useMyTheme} from "../../styled-components/styles";
import GoBack from "../../assets/icons/BottomNavbar/GoBack";
import HomeIcon from "../../assets/icons/BottomNavbar/Home";
import GoBackIcon from "../../assets/icons/BottomNavbar/GoBack";
import ProfileIcon from "../../assets/icons/BottomNavbar/Profile";
import styled from "rn-css";
import {theme} from "../../styled-components/theme";
import {router} from "expo-router";
import {useState} from "react";

const BottomNavbar = () => {

    const theme = useMyTheme();
    const [currentPage, setCurrentPage] = useState('profile');

    const navigateProfile = () => {
        setCurrentPage('profile');
        router.push('/(profile)')
    }

    const navigateHome = () => {
        setCurrentPage('home');
        router.push('/(home)')
    }

    return (
        <BottomNavbarContainer >
            <IconContainer radius="8px">
                <GoBackIcon />
            </IconContainer>
            <IconContainer onPress={() => navigateHome()}
                           bg={currentPage === 'home' ? theme.backgroundGray : 'transparent'}
                           radius="8px">
                <HomeIcon />
            </IconContainer>
            <IconContainer onPress={() => navigateProfile()}
                           bg={currentPage === 'profile' ? theme.backgroundGray : 'transparent'}
                           radius="8px">
            <ProfileIcon />
            </IconContainer>
        </BottomNavbarContainer>
    )

}

export default BottomNavbar;

export const BottomNavbarContainer = styled.View`
    background-color: ${theme.blackSecondary};
    position: absolute;
    bottom: 0;
    padding: 4px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;