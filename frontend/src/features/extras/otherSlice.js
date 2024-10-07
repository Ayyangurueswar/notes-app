import { createSlice } from "@reduxjs/toolkit";

const theme = localStorage.getItem("theme") || "light";

const initialState = {
    searchTerm: "",
    lightMode: theme,
    listView: false,
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        toggleLightMode: (state) => {
            state.lightMode = state.lightMode === 'light' ? 'dark' : 'light';
            localStorage.setItem("theme", state.lightMode);
        },
        toggleListView: (state) => {
            state.listView =!state.listView;
        },
    }
});

export const {
    setSearchTerm,
    toggleLightMode,
    toggleListView,
} = appSlice.actions;

export default appSlice.reducer;