import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee/employee-slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { demoApi } from './demoApi'
import localeReducer from '../Translation/locale/locale-slice'

export const store = configureStore({
reducer: {employeeReducer,localeReducer,
  [demoApi.reducerPath]: demoApi.reducer,
},
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(demoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);
