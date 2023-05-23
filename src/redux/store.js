import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import babyProfileReducer from './slices/babyProfileSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        babyProfile: babyProfileReducer
    }
})

export default store;