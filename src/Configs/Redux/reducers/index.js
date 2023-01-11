import { createSlice } from "@reduxjs/toolkit";
import { LoginAction } from "../actions/LoginAction";

const initialState = {
    isAuthenticated: false,
};

export const RootSlice = createSlice({
    name: 'rootSlice',
    initialState,
    reducers: {
        setAuth: LoginAction
    }
});

export const { 
    setAuth,
} = RootSlice.actions;
export default RootSlice.reducer;