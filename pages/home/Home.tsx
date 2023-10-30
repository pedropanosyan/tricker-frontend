import {FlatList, View} from "react-native";
import TicketCard from "../../components/TicketCard/TicketCard";
import FilterButton from "./components/FilterButton";
import { Column, RowAlignedCenter } from "../../styled-components/components.styles";
import {TicketsContainer, TimerContainer} from "./styles.components";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { STATUS } from "../../constants/types";
import {useEffect, useRef, useState} from "react";
import Timer from "../../components/Timer/Timer";
import {useTimer} from "../../hooks/useTimer";
import ExpandedTicket from "../../components/ExpandedTicket/ExpandedTicket";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {theme} from "../../styled-components/theme";
import {formatTime} from "../../utils/helpers";
import {stopTimer} from "../../store/features/timerSlice";
import {PanGestureHandler} from "react-native-gesture-handler";


const Home = () => {

    const timerContainerRef = useRef(null);
    const expandedTicketRef = useRef(null);
    const containerRef = useRef<any>();

    const [showExpandedInfo, setShowExpandedInfo] = useState(false)
    const options = [
        {
            name: "All",
            selected: true,
        },
        {
            name: "To do",
            selected: false,
        },
        {
            name: "In progress",
            selected: false,
        },
        {
            name: "Done",
            selected: false,
        },
        {
            name: "In review",
            selected: false,
        },
        {
            name: "Closed",
            selected: false,
        }
    ]

    const user = useAppSelector((state) => state.user);
    const timer = useAppSelector((state) => state.timer);


    const onSwipeUp = (event: { nativeEvent: { translationY: number } }) => {
        if (event.nativeEvent.translationY < -100) {
            setShowExpandedInfo(true);
        }
    };

    const onSwipeDown = (event: { nativeEvent: { translationY: number } }) => {
        if (event.nativeEvent.translationY > -100) {
            setShowExpandedInfo(false);
        }
    };


    return (
        <View>
            <Column rnCSS="margin-top:69px;" bg={theme.black}>
                <RowAlignedCenter rnCSS="margin-vertical=16px; margin-horizontal:4px;">
                    <FlatList data={options} renderItem={
                        ({item}) => (
                            <FilterButton name={item.name} selected={item.selected} />
                        )}
                        horizontal
                    />
                </RowAlignedCenter>
                <TicketsContainer clockActive={timer.show}>
                    <TicketCard id={"1"} status={STATUS.COMPLETED} title={user.name}
                                description={user.id}/>
                    <TicketCard id={"2"} status={STATUS.REVIEW} title={user.token}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'}/>
                    <TicketCard id={"3"} status={STATUS.IN_PROGRESS} title={'Ticket long long very long name'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'}/>
                    <TicketCard id={"4"} status={STATUS.TODO} title={'Ticket long long very long name'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'}/>
                    <TicketCard id={"5"} status={STATUS.COMPLETED} title={'Ticket long long very long name'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'}/>
                </TicketsContainer>
                {timer.show &&
                    <PanGestureHandler minDist={5} onGestureEvent={onSwipeUp}>
                        <TimerContainer ref={containerRef}>
                            <Timer />
                        </TimerContainer>
                    </PanGestureHandler>
                }
                {showExpandedInfo &&
                    <PanGestureHandler minDist={5} onGestureEvent={onSwipeDown}>
                        <ExpandedTicket />
                    </PanGestureHandler>
                }
                <BottomNavbar />
            </Column>
        </View>

    )


}

export default Home;