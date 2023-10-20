import {View} from "react-native";
import Ticket1 from "../../assets/icons/components/ticket/Ticket1";
import Ticket2 from "../../assets/icons/components/ticket/Ticket2";
import PlayIcon from "../../assets/icons/components/PlayIcon";
import {Text, RowFlexEnd, RowSpaceBetween, Row, IconContainer} from "../../styled-components/components.styles";
import {StatusContainer, TicketContainer} from "./components.styles";
import {COLORS, RADIUS} from "../../constants/theme";


const TicketCard = () => {

    return (
        <View>
            <RowFlexEnd>
                <StatusContainer bg=''>
                    <Text size="12" weight="500" color={COLORS.black}>In progress</Text>
                </StatusContainer>
            </RowFlexEnd>
            <TicketContainer>
                <Text size="16" weight="700">Ticket long long very long name</Text>
                <Text size="16">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Text>
                <RowSpaceBetween>
                    <Row gap="8px">
                        <IconContainer padding="0" radius="0" bg={COLORS.lightBlue}>
                            <Ticket1 />
                        </IconContainer>
                        <IconContainer padding="0" radius="0" bg={COLORS.lightgray}>
                            <Ticket2 />
                        </IconContainer>
                        <IconContainer padding="4" bg={COLORS.backgroundGray}>
                            <Text rnCSS="padding:0 6px;" size={"16"} weight={"700"}>5</Text>
                        </IconContainer>
                    </Row>
                    <IconContainer radius={"8"} opacity={'0.8'} padding="4" bg={COLORS.orange}>
                        <PlayIcon />
                    </IconContainer>
                </RowSpaceBetween>
            </TicketContainer>
        </View>
    )


}

export default TicketCard;