import { configureStore } from '@reduxjs/toolkit'
import donationsReducer from './reducers/donationsSlice'
export const store = configureStore({
    reducer: {
        donations: donationsReducer,

    },
});

