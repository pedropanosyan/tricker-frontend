import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserInterface} from "../../constants/interfaces";

const initialState: UserInterface = {
    id: "",
    name: "",
    email: "",
    token: ""
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserInterface>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
    },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;