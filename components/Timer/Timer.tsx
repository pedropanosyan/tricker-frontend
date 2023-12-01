import {View} from "react-native";
import AddIcon from "../../assets/icons/components/AddIcon";
import FlagIcon from "../../assets/icons/components/FlagIcon";
import PlayIcon from "../../assets/icons/Timer/PlayIcon";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, PADDING, RADIUS, WEIGHTS} from "../../constants/theme";
import {useEffect, useRef, useState} from "react";
import StopIcon from "../../assets/icons/Timer/StopIcon";
import {
    StyledBox, StyledColumn, StyledInteractiveBox, StyledRow, StyledTypography,
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
        <StyledRow css={{ justifyContent: "space-between", backdropFilter: "blur(12px)", padding:"16px" }}>
            <StyledColumn>
                <StyledTypography css={{ color: theme.grey300 }} variant="h2">TKT-000</StyledTypography>
                <StyledTypography variant="h3">{formatTime(timer.time)}</StyledTypography>
            </StyledColumn>
            <StyledRow css={{ alignItems: "center", gap:"16px" }}>
                <StyledInteractiveBox onPress={() => handleSubmit()}>
                    <AddIcon />
                </StyledInteractiveBox>
                <StyledInteractiveBox>
                    <FlagIcon />
                </StyledInteractiveBox>
                {timer.isRunning ? (
                <StyledInteractiveBox onPress={() => handleStopTimer()}>
                    <LinearGradient style={{borderRadius: RADIUS.large, padding: PADDING.xSmall}}
                                    colors={[theme.lightblue700, theme.lightblue100]}>
                        <StopIcon />
                    </LinearGradient>
                </StyledInteractiveBox>
                ) : (
                <StyledInteractiveBox onPress={() => handleStartTimer()}>
                    <LinearGradient style={{borderRadius: RADIUS.large, padding: PADDING.xSmall}}
                                    colors={[theme.lightblue700, theme.lightblue100]}>
                        <PlayIcon color={theme.black} />
                    </LinearGradient>
                </StyledInteractiveBox>
                )}
            </StyledRow>
        </StyledRow>
    )

}

export default Timer;