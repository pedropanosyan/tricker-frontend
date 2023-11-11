import {FlatList, TouchableOpacity, View} from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import {Row, Text, useMyTheme} from "../../styled-components/components.styles";
import {ModalContainer} from "./styles.components";

interface ProjectProps {
    name: string;
    image?: string;
}

interface ProjectArray {
    projects: ProjectProps[];
}

const Project = ({name, image}: ProjectProps) => {

    const theme = useMyTheme();

    return (
        <Row alignItems="center" gap="8px" padding="8px">
            <ProjectLogo />
            <Text color={theme.black}>{name}</Text>
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