import { UserSlice } from "./features/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {TimerSlice} from "./features/timerSlice";
import {TokenSlice} from "./features/tokenSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        timer: TimerSlice.reducer,
        token: TokenSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;