import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoggedIn: !!localStorage.getItem('accessToken'),
}
// !! = 뒤에 오는 애가 있으면 true 없으면 false //

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.isLoggedIn = true
            state.currentUser = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.currentUser = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer