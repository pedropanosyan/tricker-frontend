import {View} from "react-native";
import AddIcon from "../../assets/icons/components/AddIcon";
import FlagIcon from "../../assets/icons/components/FlagIcon";
import PlayIcon from "../../assets/icons/components/PlayIcon";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, PADDING, RADIUS, WEIGHTS} from "../../constants/theme";
import {useRef, useState} from "react";
import StopIcon from "../../assets/icons/components/StopIcon";
import {IconContainer, Row, RowSpaceBetween, Text} from "../../styled-components/components.styles"


const Timer = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [timer, setTimer] = useState(0);
    const countRef = useRef<NodeJS.Timeout | null>(null);

    const handleIsPlaying = () => {
        if (!isPlaying) {
            setIsPlaying(true)
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        } else {
            clearInterval(countRef.current!);
            setIsPlaying(false)
            console.log(timer)
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const submitTime = () => {
        clearInterval(countRef.current!);
        setIsPlaying(false);
        setTimer(0);

    }

    return (
        <RowSpaceBetween padding="16">
            <View>
                <Text size="16" weight="500" color={COLORS.lightgray}>TKT-000</Text>
                <Text size="26" weight="500">{formatTime(timer)}</Text>
            </View>
            <Row gap="16">
                <IconContainer onPress={() => submitTime()}>
                    <AddIcon />
                </IconContainer>
                <IconContainer >
                    <FlagIcon />
                </IconContainer>
                <IconContainer padding="0" onPress={() => handleIsPlaying()}>
                    <LinearGradient style={{borderRadius: RADIUS.large, padding: PADDING.xSmall}} colors={[COLORS.violet, COLORS.lightBlue]}>
                        {!isPlaying ? <PlayIcon /> : <StopIcon />}
                    </LinearGradient>
                </IconContainer>
            </Row>
        </RowSpaceBetween>
    )

}

export default Timer;