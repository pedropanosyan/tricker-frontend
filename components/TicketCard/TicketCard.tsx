import {View} from "react-native";
import Ticket1 from "../../assets/icons/ticket/Ticket1";
import Ticket2 from "../../assets/icons/ticket/Ticket2";
import PlayIcon from "../../assets/icons/Timer/PlayIcon";
import {
    IconContainer, Row,
    Text,
    useMyTheme
} from "../../styled-components/components.styles";
import {StatusContainer, TicketContainer} from "./components.styles";
import {STATUS, STATUS_COLORS, STATUS_ICONS} from "../../constants/types";
import {useTimer} from "../../hooks/useTimer";
import StopIcon from "../../assets/icons/Timer/StopIcon";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {resetTimer, startTimer, stopTimer} from "../../store/features/timerSlice";

interface TicketCardProps {
    id: string;
    status: string;
    title?: string;
    description?: string;
}


const TicketCard = ({status, title, description, id}: TicketCardProps) => {

    const theme = useMyTheme();

    const color = STATUS_COLORS[status];
    const timer = useAppSelector((state) => state.timer);

    const {startTime, stopTime, resetTime} = useTimer();
    const dispatch = useAppDispatch();


    const handleStopTimer = () => {
        stopTime();
        dispatch(stopTimer());
    }

    const handleStartTimer = () => {
        if (timer.ticketId !== id) {
            resetTime();
            dispatch(resetTimer());
        }
        dispatch(startTimer({ticketId: id}));
    }

    return (
        <View style={{paddingTop: 12}}>
            <Row justifyContent="flex-end">
                <StatusContainer bg={color}>
                    <Text size="12" weight="500" color={theme.black}>{status}</Text>
                </StatusContainer>
            </Row>
            <TicketContainer color={color}>
                <Text size="16" weight="700">{title}</Text>
                <Text size="16">{description}</Text>
                <Row justifyContent={"space-between"} alignItems="center">
                    <Row alignItems="center" width="auto" gap="8px">
                        <IconContainer padding="0" radius="0" bg={color}>
                            <Ticket1 />
                        </IconContainer>
                        <IconContainer padding="0" radius="0" bg={theme.lightgray}>
                            <Ticket2 />
                        </IconContainer>
                        <IconContainer padding="4" bg={theme.backgroundGray}>
                            <Text rnCSS="padding:0 6px;" size={"16"} weight={"700"}>5</Text>
                        </IconContainer>
                    </Row>
                    {status === STATUS.COMPLETED ? (
                        <IconContainer bg={color}>
                            {STATUS_ICONS[status]}
                        </IconContainer> ) : (
                            timer.isRunning && timer.ticketId === id ? (
                            <IconContainer onPress={() => handleStopTimer()} radius={"8"} opacity={'0.8'} padding="4" bg={color}>
                                <StopIcon/>
                            </IconContainer>) : (
                            <IconContainer onPress={() => handleStartTimer()}  radius={"8"} opacity={'0.8'} padding="4" bg={color}>
                               <PlayIcon color={theme.black}/>
                            </IconContainer>
                            ))}
                </Row>
            </TicketContainer>
        </View>
    )
}
export default TicketCard;

