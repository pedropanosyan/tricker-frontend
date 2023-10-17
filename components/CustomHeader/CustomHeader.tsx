import {View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import styles from "./styles";
import {useState} from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

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
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <FontAwesome name="bars" size={24} color="white" />
                <TouchableOpacity onPress={() => {handleModalClick()}} style={styles.projectSelection}>
                    <AntDesign style={styles.antIcon} name="down" size={20} color="white" />
                    <Text style={styles.projectText}>Project name</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.profileIcon}>
                        <FontAwesome  name="user-circle" size={24} color="white" />
                    </TouchableOpacity>
            </View>
            {openProjectsModal && <ProjectModal projects={projects}/>}
        </View>
    )

}

export default CustomHeader;