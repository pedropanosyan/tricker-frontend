import {View} from "react-native";
import Ticket1 from "../../assets/icons/ticket/Ticket1";
import Ticket2 from "../../assets/icons/ticket/Ticket2";
import PlayIcon from "../../assets/icons/Timer/PlayIcon";
import {
    StyledBox, StyledInteractiveBox, StyledRow, StyledTypography,
    useMyTheme
} from "../../styled-components/styles";
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
        <StyledBox css={{ paddingTop: "12px" }}>
            <StyledRow css={{ justifyContent: "flex-end" }}>
                <StatusContainer bg={color}>
                    <StyledTypography css={{ color: theme.black }} variant="body1">{status}</StyledTypography>
                </StatusContainer>
            </StyledRow>
            <TicketContainer color={color}>
                <StyledTypography variant="body1Bold">{title}</StyledTypography>
                <StyledTypography variant="body1">{description}</StyledTypography>
                <StyledRow css={{ justifyContent: "space-between", alignItems: "center" }}>
                    <StyledRow css={{ alignItems: "center", width: "auto", gap: "8px" }}>
                        <StyledBox css={{ backgroundColor: theme.grey500 }}>
                            <Ticket1 />
                        </StyledBox>
                        <StyledBox css={{ backgroundColor: theme.grey300 }} >
                            <Ticket2 />
                        </StyledBox>
                        <StyledBox css={{ padding: "4px 8px", backgroundColor: theme.grey500 }}>
                            <StyledTypography variant="body1Bold">5</StyledTypography>
                        </StyledBox>
                    </StyledRow>
                    {status === STATUS.COMPLETED ? (
                        <StyledBox css={{ backgroundColor: color }}>
                            {STATUS_ICONS[status]}
                        </StyledBox> ) : (
                            timer.isRunning && timer.ticketId === id ? (
                            <StyledInteractiveBox css={{ borderRadius: "8px", opacity: "0.8", padding: "4px", backgroundColor: color }}
                                                  onPress={() => handleStopTimer()}>
                                <StopIcon/>
                            </StyledInteractiveBox>) : (
                            <StyledInteractiveBox css={{ borderRadius: "8px", opacity: "0.8", padding: "4px", backgroundColor: color }}
                                onPress={() => handleStartTimer()}>
                               <PlayIcon color={theme.black}/>
                            </StyledInteractiveBox>
                            ))}
                </StyledRow>
            </TicketContainer>
        </StyledBox>
    )
}
export default TicketCard;

