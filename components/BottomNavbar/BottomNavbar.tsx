import {StyledBox, StyledInteractiveBox, useMyTheme} from "../../styled-components/styles";
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
            <StyledInteractiveBox css={{ borderRadius:"8px", padding:"8px" }}>
                <GoBackIcon />
            </StyledInteractiveBox>
            <StyledInteractiveBox css={{ borderRadius:"8px", padding:"8px" }}
                                  onPress={() => navigateHome()}>
                <HomeIcon />
            </StyledInteractiveBox>
            <StyledInteractiveBox
                css={{ borderRadius:"8px", padding:"8px",
                    backgroundColor: currentPage === 'profile' ? theme.grey500 : 'transparent',}}
                onPress={() => navigateProfile()}
            >
                <ProfileIcon />
            </StyledInteractiveBox>
        </BottomNavbarContainer>
    )

}

export default BottomNavbar;

export const BottomNavbarContainer = styled.View`
    background-color: ${theme.grey700};
    position: fixed;
    bottom: 0;
    padding: 4px 24px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;