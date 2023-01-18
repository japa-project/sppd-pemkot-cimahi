import { createSlice } from "@reduxjs/toolkit";
import { ContentTypeAction } from "../actions/ContentTypeAction";
import { LoginAction } from "../actions/LoginAction";
import { SelectedIdAction } from "../actions/SelectedIdAction";
import { UsernameAction } from "../actions/UsernameActions";

const initialState = {
    isAuthenticated: false,
    username: null,
    contentType: 'View',
    selectedId: null
};

export const RootSlice = createSlice({
    name: 'rootSlice',
    initialState,
    reducers: {
        setAuth: LoginAction,
        setUsername: UsernameAction,
        setContentType: ContentTypeAction,
        setSelectedId: SelectedIdAction
    }
});

export const { 
    setAuth,
    setUsername,
    setContentType,
    setSelectedId
} = RootSlice.actions;
export default RootSlice.reducer;