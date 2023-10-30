import {View} from "react-native";
import {
    Border,
    Column,
    IconContainer, InlineColumn,
    Row,
    RowAlignedCenter,
    Subtitle,
    Text,
    Title, useMyTheme, VerticalLine
} from "../../styled-components/components.styles";
import Ticket1 from "../../assets/icons/ticket/Ticket1";
import Ticket2 from "../../assets/icons/ticket/Ticket2";
import PointIcon from "../../assets/icons/ticket/Point";
import Timer from "../Timer/Timer";
import {theme} from "../../styled-components/theme";

const ExpandedTicket = () => {

    const theme = useMyTheme();

    return (
        <Column>
            <Border color={theme.gray} side={"top"} width={"2px"}/>
            <Column gap={"40px"} padding="16px" bg={theme.black}>
                <Column gap="16px">
                    <Text weight={"700"} size={"24px"}>Ticket long long name</Text>
                    <Text color={theme.textGray}>TIK-000</Text>
                    <RowAlignedCenter gap="11px">
                        <IconContainer padding="0" radius="0" bg={theme.lightBlue}>
                            <Ticket1 />
                        </IconContainer>
                        <IconContainer padding="0" radius="0" bg={theme.lightgray}>
                            <Ticket2 />
                        </IconContainer>
                        <IconContainer padding="4" bg={theme.backgroundGray}>
                            <Text rnCSS="padding:0 6px;" size={"16"} weight={"700"}>5</Text>
                        </IconContainer>
                    </RowAlignedCenter>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
                        a iaculis at erat pellentesque adipiscing commodo elit...</Text>
                </Column>
                <Column gap={"16px"}>
                    <Text weight={"700"} size={"20px"}>Timeline</Text>
                    <Event />
                    <Event />
                    <Event />
                </Column>
            </Column>
        </Column>
        )
}

export default ExpandedTicket;


const Event = () => {
    return (
        <Row gap={"8px"}>
            <View>
                <Text size={"14"}>21/03/23</Text>
                <Text size={"14"}>12:05</Text>
            </View>
            <View style={{marginTop: 4, height: "100%"}}>
                <View style={{zIndex: 10}}>
                    <PointIcon />
                </View>
                <VerticalLine color={theme.gray} width={"1px"}/>
            </View>
            <Column width={"75%"}>
                <Text weight={"600px"}>Se comenzó el ticket</Text>
                <Text color={theme.textGray}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
            </Column>
        </Row>
    )
}