import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './app.api';
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: apiSlice,
          },
          serializableCheck: false,
        }).concat(apiSlice.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


