import {useState} from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { useMyTheme, StyledBox, StyledRow, StyledInteractiveBox
} from "../../styled-components/styles";
import CustomHeaderIcon from "../../assets/icons/CustomHeader/CustomHeaderIcon";
import {Portal} from "@gorhom/portal";
import ProjectIcon from "../../assets/icons/CustomHeader/ProjectIcon";

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
        <StyledBox>
            <StyledRow css={{ zIndex: 10, position: "fixed", boxSizing: "content-box", backgroundColor: theme.black }}>
                    <StyledRow css={{ justifyContent: "center" }}>
                        <StyledInteractiveBox css={{ marginTop: "48px", gap: "8px", justifyContent: "center", flexDirection: "row", width: "100%" }} onPress={() => toggleModal()}>
                            <ProjectIcon size={32} />
                            <CustomHeaderIcon size={32} />
                        </StyledInteractiveBox>
                    </StyledRow>
            </StyledRow>
            {showModal &&
                <Portal name="projectModal">
                    <ProjectModal projects={projects}/>
                </Portal>
            }
        </StyledBox>
    )

}

export default CustomHeader;