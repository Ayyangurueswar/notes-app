import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import appReducer from "../features/extras/otherSlice";
import notesReducer from "../features/notes/notesSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        notes: notesReducer
    }
})