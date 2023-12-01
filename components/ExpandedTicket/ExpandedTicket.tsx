import {FlatList, View} from "react-native";
import {
    Box,
    Column,
    Row, StyledBox, StyledRow, StyledTypography,
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
        <StyledBox css={{ width: "100%", height: "100%",
            backgroundColor: theme.black, zIndex: 10, position: "relative" }}>
            <StyledBox css={{ gap: "40px", padding: "16px" }}>
                <StyledBox css={{ gap: "16px" }}>
                    <StyledTypography css={{ color: "white" }} variant="h3">Ticket long long name</StyledTypography>
                    <StyledTypography css={{ color: "white" }} variant="subtitle">Ticket short name</StyledTypography>
                    <StyledRow css={{ alignItems: "center", gap: "12px" }}>
                        <StyledBox css={{ backgroundColor: theme.lightblue300 }}>
                            <Ticket1 />
                        </StyledBox>
                        <StyledBox css={{ backgroundColor: theme.grey500 }}>
                            <Ticket2 />
                        </StyledBox>
                        <StyledBox css={{ backgroundColor: theme.grey500, padding: "4px" }}>
                            <StyledTypography css={{ color: "white", padding: "0 6px"}} variant="body1Bold">5</StyledTypography>
                        </StyledBox>
                    </StyledRow>
                    <StyledTypography variant="body1">Lorem ipsum dolor sit amet, dolore magna aliqua. Molestie
                        a iaculis at erat pellentesque adipiscing commodo elit...</StyledTypography>
                </StyledBox>
                <StyledBox>
                    <StyledTypography variant="body1Bold">Timeline</StyledTypography>
                    <BottomSheetFlatList
                        data={data}
                        keyExtractor={(item: any) => item.id.toString()}
                        renderItem={({ item }) => <Event data={item}/>}
                    />
                </StyledBox>
            </StyledBox>
        </StyledBox>
        )
}

export default ExpandedTicket;


const Event = ({data}: any) => {

    return (
        <StyledRow css={{ height: "auto", gap: "16px", backgroundColor: theme.grey700 }}>
            <StyledBox>
                <StyledTypography variant="body1">{data.date}</StyledTypography>
                <StyledTypography variant="body1">{data.time}</StyledTypography>
            </StyledBox>
            <StyledBox css={{ borderLeft: `2px solid ${theme.white}` }}>
                <StyledBox>
                    <PointIcon />
                </StyledBox>
            </StyledBox>
            <Column width={"75%"}>
                <StyledTypography variant="subtitle">{data.subtitle}</StyledTypography>
                <StyledTypography variant="body1">{data.description}</StyledTypography>
            </Column>
        </StyledRow>
    )
}