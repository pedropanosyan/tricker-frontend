import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserInterface} from "../../constants/interfaces";

const initialState: { token: string } = {
    token: ""
};

export const TokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = "";
        }
    },
});

export default TokenSlice.reducer;
export const { addToken, removeToken } = TokenSlice.actions;