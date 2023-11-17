import {useAppDispatch, useAppSelector} from "../../../store/store";
import {IconContainer} from "../../../styled-components/styles";
import StopIcon from "./StopIcon";
import {resetTimer, startTimer, stopTimer} from "../../../store/features/timerSlice";
import {useTimer} from "../../../hooks/useTimer";
import {STATUS_ICONS} from "../../../constants/types";
import PlayIcon from "./PlayIcon";
import {View} from "react-native";

const TimerIcon = (id: string, color: string) => {

    const {stopTime, resetTime} = useTimer();
    const dispatch = useAppDispatch();

    const timer = useAppSelector((state) => state.timer);

    const handleStopTimer = () => {
        stopTime();
        dispatch(stopTimer());
    }

    console.log(color)
    const handleStartTimer = () => {
        if (timer.ticketId !== id) {
            resetTime();
            dispatch(resetTimer());
        }
        dispatch(startTimer({ticketId: id}));
    }

    return (
        <View>
            {timer.isRunning && timer.ticketId === id ? (
                <IconContainer onPress={() => handleStopTimer()} radius={"8"} opacity={'0.8'} padding="4" bg={color}>
                    <StopIcon/>
                </IconContainer>
            ) : (
                <IconContainer onPress={() => handleStartTimer()}  radius={"8"} opacity={'0.8'} padding="4" bg={color}>
                    <PlayIcon/>
                </IconContainer>
            )}
        </View>
    )

}

export default TimerIcon;