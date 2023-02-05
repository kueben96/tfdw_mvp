import { configureStore } from '@reduxjs/toolkit'
import donationsReducer from './reducers/donationsSlice'
import authReducer from './reducers/authSlice'

export const store = configureStore({
    reducer: {
        donations: donationsReducer,
        auth: authReducer
    },
});

