import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBabyProfile = createAsyncThunk(
    'babyProfile/getBabyProfile',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('https://api.mybebe.net/api/v1/baby',{
                headers: {
                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            return response.data
            console.log(response.data)
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue
        }
    }
)

const initialState = {
    name: '',
    birthDate: '',
    gender: '',
    expectDate: '',
    pregnantDate: '',
    isLoading: false,
    isError: false
}

const babyProfileSlice = createSlice({
    name: 'babyProfile',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getBabyProfile.pending, (state) => {
            state.isLoading = true
            state.isError =false
        })
        .addCase(getBabyProfile.fulfilled, (state, action) => {
            console.log(action)
            state.name = action.payload.name
            state.birthDate = action.payload.birthDate
            state.expectDate = action.payload.expectDate
            state.pregnantDate = action.payload.pregnantDate
            state.isLoading = false
            state.isError = false

        })
        .addCase(getBabyProfile.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default babyProfileSlice.reducer;