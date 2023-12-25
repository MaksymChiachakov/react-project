import { configureStore } from "@reduxjs/toolkit";
// Import Reducers
import counterReducer from '../redux/counter/counterSlice'
import usersReducer from '../redux/users/userSlice'

// Store from Redux for JS (Toolkit)
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
})