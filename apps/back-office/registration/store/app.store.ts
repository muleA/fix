import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './app.api';
import organizationReducer from '../features/organization/store/slice/organization.slice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        organization: organizationReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;