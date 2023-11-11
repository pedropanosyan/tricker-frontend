import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import {ProfileIcon, SecondaryContainer} from "./header.styles";
import {
    Text,
    TouchableRow,
    Border,
    Column,
    Row, useMyTheme
} from "../../styled-components/components.styles";
import {SafeAreaView, View} from "react-native";
import {theme} from "../../styled-components/theme";
import CustomHeaderIcon from "../../assets/icons/CustomHeader/CustomHeaderIcon";

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
            <Row rnCSS="box-sizing:content-box;">
                <Row rnCSS={"padding-top:24px;width:100vw;"} bg={theme.blackSecondary}>
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
                {openProjectsModal && <ProjectModal projects={projects}/>}
            </Row>
    )

}

export default CustomHeader;