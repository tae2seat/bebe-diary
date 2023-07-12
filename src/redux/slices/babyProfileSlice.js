import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loggedApi } from "../../axios";

export const getBabyProfile = createAsyncThunk(
    'babyProfile/getBabyProfile',
    async (_, thunkApi) => {
        try {
            const response = await loggedApi.get('/baby',{
                headers: {
                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(response.data)
            return  response.data
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue
        }
    }
)

const initialState = {
    babyName: '',
    babyBirthDate: '',
    babyGender: '',
    expectDate: '',
    babyFace:'',
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
                    state.babyName = item.name;
                    state.babyBirthDate = item.birthDate;
                    state.babyGender = item.gender
                    state.expectDate = item.expectDate;
                    state.babyFace = item.face;
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