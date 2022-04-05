import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './app.store'

// Define a type for the slice state
interface AppState {
    sideView: '' | 'activity-audit' | 'note' | 'help';
    isFullScreen: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
    sideView: '',
    isFullScreen: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleScreenSize: (state) => {
            state.isFullScreen = !state.isFullScreen
        },
        setSideView: (state, action: PayloadAction<'' | 'activity-audit' | 'note' | 'help'>) => {
            state.sideView = action.payload
        },
    },
})

export const { toggleScreenSize, setSideView } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSideView = (state: RootState) => state.app.sideView;
export const selectIsFullScreen = (state: RootState) => state.app.isFullScreen;

export default appSlice.reducer;