import {FlatList, SafeAreaView, Text, View} from "react-native";
import TicketCard from "../../components/TicketCard/TicketCard";
import styles from "./styles";
import FilterButton from "./components/FilterButton";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import Timer from "../../components/Timer/Timer";
import {GlobalContainer, Row} from "../../styled-components/components.styles";
import {COLORS} from "../../constants/theme";
import {TicketsContainer} from "./styles.components";


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
        <GlobalContainer bg={COLORS.black}>
            <Row rnCSS="margin-vertical=16px; margin-horizontal:4px;">
                <FlatList data={options} renderItem={
                    ({item}) => (
                        <FilterButton name={item.name} selected={item.selected} />
                    )}
                    horizontal
                />
            </Row>
            <TicketsContainer>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
            </TicketsContainer>
            <View>
                <Timer/>
            </View>
        </GlobalContainer>
    )


}

export default Home;