import { configureStore } from '@reduxjs/toolkit'
import donationsReducer from './reducers/donationsSlice'
import authReducer from './reducers/authSlice'
import { apiSlice } from './reducers/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        donations: donationsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true

});

