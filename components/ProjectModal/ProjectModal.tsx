import {FlatList, Text, View} from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import styles from "./styles"

interface ProjectProps {
    name: string;
    image?: string;
}

interface ProjectArray {
    projects: ProjectProps[];
}

const Project = ({name, image}: ProjectProps) => {

    return (
        <View style={styles.projectNameContainer}>
            <ProjectLogo />
            <Text style={styles.projectName}>{name}</Text>
        </View>
    )
}

const ProjectModal = ({projects}: ProjectArray) => {

    return (
        <View style={styles.container}>
            <FlatList data={projects}
                      renderItem={
                            ({item}) => <Project name={item.name} />
                      } />
        </View>
    )
}

export default ProjectModal;