import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notesService from "./notesServices";

const initialState = {
    notes: [],
    isError: false,
    isLoading: false,
    message: '',
}

export const addNote = createAsyncThunk('notes/add', async(req, thunkAPI) => {
    try{
        return await notesService.addNote(req);
    }
    catch(e){
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getNotes = createAsyncThunk('notes/get', async(user, thunkAPI) => {
    try{
        return await notesService.getNotes(user);
    }
    catch(e){
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const editNote = createAsyncThunk('notes/edit', async(req, thunkAPI) => {
    try{
        return await notesService.editNote(req);
    }
    catch(e){
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteNote = createAsyncThunk('notes/delete', async(req, thunkAPI) => {
    try{
        return await notesService.deleteNote(req);
    }
    catch(e){
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addNote.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(addNote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.notes = [action.payload, ...state.notes];
        }).addCase(addNote.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(getNotes.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(getNotes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.notes = action.payload;
        }).addCase(getNotes.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(editNote.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(editNote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            const oldNotes = state.notes.filter(note => note._id !== action.payload._id);
            state.notes = [...oldNotes, action.payload]
        }).addCase(editNote.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(deleteNote.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(deleteNote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.notes = state.notes.filter(note => note._id!== action.payload._id);
        }).addCase(deleteNote.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export default notesSlice.reducer;
export const {reset} = notesSlice.actions;