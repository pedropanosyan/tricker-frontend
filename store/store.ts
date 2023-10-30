import { UserSlice } from "./features/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {TimerSlice} from "./features/timerSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        timer: TimerSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;