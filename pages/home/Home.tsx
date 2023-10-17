import {FlatList, SafeAreaView, Text, View} from "react-native";
import TicketCard from "../../components/TicketCard/TicketCard";
import styles from "./styles";
import FilterButton from "./components/FilterButton";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import Timer from "../../components/Timer/Timer";


const Home = () => {

    const options = [
        {
            name: "All",
            selected: true,
        },
        {
            name: "To do",
            selected: false,
        },
        {
            name: "In progress",
            selected: false,
        },
        {
            name: "Done",
            selected: false,
        },
        {
            name: "In review",
            selected: false,
        },
        {
            name: "Closed",
            selected: false,
        }
    ]
    const projects = [
        {name: "Project 1", image: "image"},
        {name: "Project 2", image: "image"},
        {name: "Project 3", image: "image"},
        {name: "Project 4", image: "image"},
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.optionsContainer}>
                <FlatList data={options} renderItem={
                    ({item}) => (
                        <FilterButton name={item.name} selected={item.selected} />
                    )}
                    horizontal
                />
            </View>
            <View style={styles.ticketsContainer}>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
            </View>
            <View style={styles.timerContainer}>
                <Timer/>
            </View>
        </SafeAreaView>
    )


}

export default Home;