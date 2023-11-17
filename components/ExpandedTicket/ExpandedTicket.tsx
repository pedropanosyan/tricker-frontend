import {FlatList, View} from "react-native";
import {
    Column,
    IconContainer,
    Row,
    Text,
    useMyTheme, VerticalLine
} from "../../styled-components/styles";
import Ticket1 from "../../assets/icons/ticket/Ticket1";
import Ticket2 from "../../assets/icons/ticket/Ticket2";
import PointIcon from "../../assets/icons/ticket/Point";
import Timer from "../Timer/Timer";
import {theme} from "../../styled-components/theme";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";

const ExpandedTicket = () => {

    const data = [
        {
            id: 1,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 2,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 3,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 4,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:5,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:6,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
    ];

    const theme = useMyTheme();

    return (
        <Column>
            <Column gap={"40px"} padding="16px" bg={theme.black}>
                <Column gap="16px">
                    <Text weight={"700"} size={"24px"}>Ticket long long name</Text>
                    <Text color={theme.textGray}>TIK-000</Text>
                    <Row alignItems="center" gap="11px">
                        <IconContainer padding="0" radius="0" bg={theme.lightBlue}>
                            <Ticket1 />
                        </IconContainer>
                        <IconContainer padding="0" radius="0" bg={theme.lightgray}>
                            <Ticket2 />
                        </IconContainer>
                        <IconContainer padding="4" bg={theme.backgroundGray}>
                            <Text rnCSS="padding:0 6px;" size={"16"} weight={"700"}>5</Text>
                        </IconContainer>
                    </Row>
                    <Text>Lorem ipsum dolor sit amet, dolore magna aliqua. Molestie
                        a iaculis at erat pellentesque adipiscing commodo elit...</Text>
                </Column>
                <Column  rnCSS="max-height:285px;" gap={"16px"}>
                    <Text weight={"700"} size={"20px"}>Timeline</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Event data={item} />}
                    />
                </Column>
            </Column>
        </Column>
        )
}

export default ExpandedTicket;


const Event = ({data}: any) => {


    return (
        <Row gap={"8px"}>
            <View>
                <Text size={"14"}>{data.date}</Text>
                <Text size={"14"}>{data.time}</Text>
            </View>
            <View style={{ marginTop: 4, height: "100%" }}>
                <View style={{ zIndex: 10 }}>
                    <PointIcon />
                </View>
                <VerticalLine color={theme.gray} width={"1px"} />
            </View>
            <Column width={"75%"}>
                <Text weight={"600px"}>{data.title}</Text>
                <Text color={theme.textGray}>{data.description}</Text>
            </Column>
        </Row>
    )
}