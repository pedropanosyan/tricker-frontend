import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import {HeaderBottomBorder, ProfileIcon, SecondaryContainer} from "./header.styles";
import {Row, Text, RowSpaceBetween, TouchableRow} from "../../styled-components/components.styles";
import {COLORS} from "../../constants/theme";

const projects = [
    {name: "Project 1", image: "image"},
    {name: "Project 2", image: "image"},
    {name: "Project 3", image: "image"},
    {name: "Project 4", image: "image"},
]


const CustomHeader = () => {

    const [openProjectsModal, setOpenProjectsModal] = useState(false)

    const handleModalClick = () => {
      setOpenProjectsModal(!openProjectsModal)
    }

    return (
        <Row bg={COLORS.blackSecondary}>
            <HeaderBottomBorder />
            <RowSpaceBetween rnCSS="flex:1;" padding="20">
                <FontAwesome name="bars" size={24} color="white" />
                <TouchableRow gap="8px" onPress={() => {handleModalClick()}}>
                    <AntDesign name="down" size={20} color="white" />
                    <Text size="18">Project name</Text>
                </TouchableRow>
                <ProfileIcon>
                    <FontAwesome  name="user-circle" size={24} color="white" />
                </ProfileIcon>
            </RowSpaceBetween>
            {openProjectsModal && <ProjectModal projects={projects}/>}
        </Row>
    )

}

export default CustomHeader;