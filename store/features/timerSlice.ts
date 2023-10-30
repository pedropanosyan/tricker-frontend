import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {TimerInterface, UserInterface} from "../../constants/interfaces";
import {number} from "prop-types";
import {useTimer} from "../../hooks/useTimer";

const initialState: TimerInterface = {
    ticketId: "",
    time: 0,
    isRunning: false,
    show: false,
};


export const TimerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        startTimer: (state, action) => {
            if (state.ticketId !== action.payload.ticketId) {
                resetTimer();
            }
            state.ticketId = action.payload.ticketId;
            state.show = true;
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        resetTimer: (state) => {
            state.isRunning = false;
            state.time = 0;
            state.ticketId = "";
        },
        tick: (state) => {
            if (state.isRunning) {
                state.time += 1;
            }
        },
        submitTime: (state) => {
            state.isRunning = false;
            state.show = false;
            state.time = 0;

        }
    },
});

export const {
    startTimer,
    stopTimer,
    resetTimer,
    tick,
    submitTime
} = TimerSlice.actions;

export default TimerSlice.reducer;
