import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import {ProfileIcon, SecondaryContainer} from "./header.styles";
import {
    Text,
    TouchableRow,
    Border,
    Column,
    Row, useMyTheme, Box
} from "../../styled-components/styles";
import CustomHeaderIcon from "../../assets/icons/CustomHeader/CustomHeaderIcon";
import {View} from "react-native";

const projects = [
    {name: "Project 1", image: "image"},
    {name: "Project 2", image: "image"},
    {name: "Project 3", image: "image"},
    {name: "Project 4", image: "image"},
]


const CustomHeader = () => {

    const [openProjectsModal, setOpenProjectsModal] = useState(false)
    const theme = useMyTheme();

    const handleModalClick = () => {
      setOpenProjectsModal(!openProjectsModal)
    }

    return (
        <Box>
            <Row bg={theme.blackSecondary} rnCSS="z-index:10;position:fixed;box-sizing:content-box;">
                <Row bg={theme.blackSecondary} rnCSS={"padding-top:24px;width:100vw;"} >
                    <Border />
                    <Row justifyContent="space-between" rnCSS="flex:1;" padding="20">
                        <FontAwesome name="bars" size={24} color="white" />
                        <TouchableRow gap="8px" onPress={() => {handleModalClick()}}>
                            <Text size="18">Project name</Text>
                            <CustomHeaderIcon />
                        </TouchableRow>
                        <ProfileIcon>
                            <FontAwesome  name="user-circle" size={24} color="white" />
                        </ProfileIcon>
                    </Row>
                </Row>
            </Row>
            {openProjectsModal &&
                <Box rnCSS="align-self:center;">
                    <ProjectModal projects={projects}/>
                </Box>
            }
        </Box>
    )

}

export default CustomHeader;