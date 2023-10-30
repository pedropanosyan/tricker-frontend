import {IconContainer, RowSpaceBetween, useMyTheme} from "../../styled-components/components.styles";
import GoBack from "../../assets/icons/BottomNavbar/GoBack";
import HomeIcon from "../../assets/icons/BottomNavbar/Home";
import GoBackIcon from "../../assets/icons/BottomNavbar/GoBack";
import ProfileIcon from "../../assets/icons/BottomNavbar/Profile";
import styled from "rn-css";
import {theme} from "../../styled-components/theme";

const BottomNavbar = () => {

    const theme = useMyTheme();

    return (
        <BottomNavbarContainer>
            <IconContainer radius="8px">
                <GoBackIcon />
            </IconContainer>
            <IconContainer bg={theme.backgroundGray} radius="8px">
                <HomeIcon />
            </IconContainer>
            <IconContainer radius="8px">
            <ProfileIcon />
            </IconContainer>
        </BottomNavbarContainer>
    )

}

export default BottomNavbar;

export const BottomNavbarContainer = styled.View`
    background-color: ${theme.blackSecondary};
    padding: 4px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
`;