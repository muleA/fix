import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { appApi } from './app.api'
import localeReducer from '../shared/store/slices/locale/locale-slice'


export const store = configureStore({
reducer: {[appApi.reducerPath]: appApi.reducer,
  localeReducer
},
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(appApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);
