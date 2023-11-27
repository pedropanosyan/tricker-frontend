import {FlatList, Text, View} from "react-native";
import {Box, Column, OuterContainer, Row} from "../../styled-components/styles";
import {TicketsContainer, TimerContainer} from "./components.styles";
import {JSX, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import {any} from "prop-types";
import {theme} from "../../styled-components/theme";
import FilterButton from "./components/FilterButton";
import TicketCard from "../../components/TicketCard/TicketCard";
import {STATUS} from "../../constants/types";
import ExpandedTicket from "../../components/ExpandedTicket/ExpandedTicket";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import Timer from "../../components/Timer/Timer";
import {
    BottomSheetDefaultBackdropProps
} from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import {Portal} from "@gorhom/portal";
import config from "../../auth0-config";


const Home = () => {

    const [showBottomSheet, setShowBottomSheet] = useState(false);

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
    const ticketData = [
        {
            id: "1",
            status: STATUS.COMPLETED,
            title: 'Ticket long long very long name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
        },
        {
            id: "2",
            status: STATUS.REVIEW,
            title: 'Ticket long long very long name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
        },
        {
            id: "3",
            status: STATUS.IN_PROGRESS,
            title: 'Ticket long long very long name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
        },
        {
            id: "4",
            status: STATUS.TODO,
            title: 'Ticket long long very long name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
        },
        {
            id: "5",
            status: STATUS.COMPLETED,
            title: 'Ticket long long very long name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
        },
    ];
    const data = [
        {
            id: 1,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 2,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 3,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id: 4,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:5,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:6,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:7,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:8,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
        {
            id:9,
            date: "21/03/23",
            time: "12:05",
            title: "Se comenzó el ticket",
            description: "Lorem ipsum dolor sit amet, labore et dolore magna aliqua",
        },
    ];
    const snapPoints = useMemo(() => ['60%', '80%'], []);

    const token = useAppSelector((state) => state.token);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSwipe = () => {
        if (showBottomSheet) {
            bottomSheetRef.current?.close()
            setShowBottomSheet(false)
        }
        else {
            bottomSheetRef.current?.expand()
            setShowBottomSheet(true)
        }
    };

    const timer = useAppSelector((state) => state.timer);

    const renderBackdrop = useCallback(
        (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={1}
            />
        ),
        []
    );

    return (
        <OuterContainer>
            <CustomHeader />
            <Box bg={theme.black}>
                <Row width="100%" alignItems="center" rnCSS="margin-vertical=16px;margin-top:18;">
                    <FlatList data={options} renderItem={
                        ({item}) => (
                            <FilterButton name={item.name} selected={item.selected} />
                        )}
                        horizontal
                    />
                </Row>
                <View>
                    <Text style={{color:"white", fontSize:18}}>{token.token}</Text>
                </View>
                <TicketsContainer clockActive={timer.show}>
                    <FlatList
                        data={ticketData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TicketCard
                                id={item.id}
                                status={item.status}
                                title={item.title}
                                description={item.description}
                            />
                        )}
                    />
                </TicketsContainer>
            </Box>
            <Box width="100vw" rnCSS="position:absolute;bottom:0;">
                {timer.show && (
                    <TimerContainer onPress={handleSwipe}>
                        <Timer />
                    </TimerContainer>
                )}
                <BottomNavbar />
            </Box>
            {showBottomSheet && (
                <BottomSheet
                    backdropComponent={renderBackdrop}
                    enablePanDownToClose={true}
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    index={1}
                    backgroundStyle={{backgroundColor: theme.gray}}
                    handleStyle={{backgroundColor: theme.black}}
                    handleIndicatorStyle={{backgroundColor: theme.backgroundGray}}
                    onClose={() => handleSwipe()}
                >
                    <ExpandedTicket data={data}/>
                </BottomSheet>
            )}
        </OuterContainer>
    )
}

export default Home;
