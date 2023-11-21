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
import {Portal} from "@gorhom/portal";

const projects = [
    {name: "Project 1", image: "image"},
    {name: "Project 2", image: "image"},
    {name: "Project 3", image: "image"},
    {name: "Project 4", image: "image"},
]

const CustomHeader = () => {

    const theme = useMyTheme();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Box>
            <Row bg={theme.blackSecondary} rnCSS="z-index:10;position:fixed;box-sizing:content-box;">
                <Row bg={theme.blackSecondary} rnCSS={"padding-top:24px;width:100vw;"} >
                    <Border />
                    <Row justifyContent="space-between" rnCSS="flex:1;" padding="20">
                        <FontAwesome name="bars" size={24} color="white" />
                        <TouchableRow gap="8px" onPress={() => toggleModal()}>
                            <Text size="18">Project name</Text>
                            <CustomHeaderIcon />
                        </TouchableRow>
                        <ProfileIcon>
                            <FontAwesome  name="user-circle" size={24} color="white" />
                        </ProfileIcon>
                    </Row>
                </Row>
            </Row>
            {showModal &&
                <Portal name="projectModal">
                    <ProjectModal projects={projects}/>
                </Portal>
            }
        </Box>
    )

}

export default CustomHeader;