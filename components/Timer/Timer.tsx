import {View} from "react-native";
import AddIcon from "../../assets/icons/components/AddIcon";
import FlagIcon from "../../assets/icons/components/FlagIcon";
import PlayIcon from "../../assets/icons/Timer/PlayIcon";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, PADDING, RADIUS, WEIGHTS} from "../../constants/theme";
import {useEffect, useRef, useState} from "react";
import StopIcon from "../../assets/icons/Timer/StopIcon";
import {
    IconContainer, Row,
    Text,
    useMyTheme
} from "../../styled-components/styles"
import {useTimer} from "../../hooks/useTimer";
import {TimerInterface} from "../../constants/interfaces";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {startTimer, stopTimer, submitTime} from "../../store/features/timerSlice";
import {formatTime} from "../../utils/helpers";



const Timer = () => {

    const theme = useMyTheme();

    const timer = useAppSelector((state) => state.timer);
    const dispatch = useAppDispatch();

    const { startTime, stopTime, resetTime } = useTimer();


    useEffect(() => {
        if (timer.isRunning) {
            startTime();
        } else {
            stopTime();
        }
    }, [timer.isRunning]);

    const handleSubmit = () => {
      resetTime();
      dispatch(submitTime());
    }

    const handleStopTimer = () => {
        stopTime();
        dispatch(stopTimer());
    }

    const handleStartTimer = () => {
        dispatch(startTimer({ticketId: timer.ticketId}));
    }

    return (
        <Row justifyContent="space-between" rnCSS="backdrop-filter: blur(12px);" padding="16">
            <View>
                <Text size="16" weight="500" color={theme.lightgray}>TKT-000</Text>
                <Text size="26" weight="500">{formatTime(timer.time)}</Text>
            </View>
            <Row alignItems="center" gap="16">
                <IconContainer onPress={() => handleSubmit()}>
                    <AddIcon />
                </IconContainer>
                <IconContainer>
                    <FlagIcon />
                </IconContainer>
                {timer.isRunning ? (
                <IconContainer padding="0" onPress={() => handleStopTimer()}>
                    <LinearGradient style={{borderRadius: RADIUS.large, padding: PADDING.xSmall}} colors={[theme.violet, theme.lightBlue]}>
                        <StopIcon />
                    </LinearGradient>
                </IconContainer>
                ) : (
                <IconContainer padding="0" onPress={() => handleStartTimer()}>
                    <LinearGradient style={{borderRadius: RADIUS.large, padding: PADDING.xSmall}} colors={[theme.violet, theme.lightBlue]}>
                        <PlayIcon color={theme.black} />
                    </LinearGradient>
                </IconContainer>
                )}
            </Row>
        </Row>
    )

}

export default Timer;