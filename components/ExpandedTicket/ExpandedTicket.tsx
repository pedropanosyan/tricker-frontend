import {FlatList, View} from "react-native";
import {
    Box,
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

const ExpandedTicket = ({data}: any) => {

    const theme = useMyTheme();

    return (
        <Box width="100%" height="100%" bg={theme.black} rnCSS="z-index:10; position:relative;">
            <Box gap={"40px"} padding="16px">
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
                <Box>
                    <Text weight={"700"} size={"20px"} rnCSS="margin-bottom:8px;">Timeline</Text>
                    <BottomSheetFlatList
                        data={data}
                        keyExtractor={(item: any) => item.id.toString()}
                        renderItem={({ item }) => <Event data={item}/>}
                    />
                </Box>
            </Box>
        </Box>
        )
}

export default ExpandedTicket;


const Event = ({data}: any) => {

    return (
        <Row height={"auto"} gap={"16px"}>
            <View>
                <Text size={"14"}>{data.date}</Text>
                <Text size={"14"}>{data.time}</Text>
            </View>
            <View>
                <View>
                    <PointIcon />
                </View>
                <VerticalLine height="auto" color={theme.gray} width={"1px"} />
            </View>
            <Column width={"75%"}>
                <Text weight={"600px"}>{data.title}</Text>
                <Text color={theme.textGray}>{data.description}</Text>
            </Column>
        </Row>
    )
}