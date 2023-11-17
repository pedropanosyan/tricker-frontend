import {FlatList, TouchableOpacity, View} from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import {Box, Row, Text, useMyTheme} from "../../styled-components/styles";
import {theme} from "../../styled-components/theme";

interface ProjectProps {
    name: string;
    image?: string;
}

interface ProjectArray {
    projects: ProjectProps[];
}

const Project = ({ name }: ProjectProps) => {

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
        <Box padding="8px" height="250px" width="200px" bg={theme.lightgray} rnCSS="border-radius:16;">
            <FlatList data={projects}
                      renderItem={
                            ({item}) => <Project name={item.name} />
                      } />
        </Box>
    )
}

export default ProjectModal;