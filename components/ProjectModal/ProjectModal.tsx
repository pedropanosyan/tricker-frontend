import {FlatList, TouchableOpacity, View} from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import {Text, Row} from "../../styled-components/components.styles";
import {COLORS} from "../../constants/theme";
import {ModalContainer} from "./styles.components";

interface ProjectProps {
    name: string;
    image?: string;
}

interface ProjectArray {
    projects: ProjectProps[];
}

const Project = ({name, image}: ProjectProps) => {

    return (
        <Row gap="8px" padding="8px">
            <ProjectLogo />
            <Text color={COLORS.black}>{name}</Text>
        </Row>
    )
}

const ProjectModal = ({projects}: ProjectArray) => {

    return (
        <ModalContainer>
            <FlatList data={projects}
                      renderItem={
                            ({item}) => <Project name={item.name} />
                      } />
        </ModalContainer>
    )
}

export default ProjectModal;