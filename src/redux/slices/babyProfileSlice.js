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
            if (Array.isArray(action.payload) && action.payload.length > 0){
                const payloadArray = action.payload; 

                payloadArray.forEach(item => {
                    state.name = item.name;
                    state.birthDate = item.birthDate;
                    state.expectDate = item.expectDate;
                    state.pregnantDate = item.pregnantDate;
                });
            
                state.isLoading = false;
                state.isError = false;
            }
        })
        .addCase(getBabyProfile.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default babyProfileSlice.reducer;