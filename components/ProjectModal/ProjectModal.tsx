import { FlatList } from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import { StyledBox, StyledRow, StyledTypography, useMyTheme } from "../../styled-components/styles";
import { theme } from "../../styled-components/theme";

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
        <StyledRow css={{ alignItems: "center", gap: "8px", padding: "8px" }}>
            <ProjectLogo />
            <StyledTypography css={{ color: theme.black }}>{name}</StyledTypography>
        </StyledRow>
    )
}

const ProjectModal = ({projects}: ProjectArray) => {

    return (
        <StyledBox css={{
            padding: "8px 24px", backgroundColor: theme.grey300, position: "absolute",
            top: "96px", borderRadius: "16px", alignSelf: "center" }}>
            <FlatList data={projects}
                      renderItem={
                            ({item}) => <Project name={item.name} />
                      } />
        </StyledBox>
    )
}

export default ProjectModal;