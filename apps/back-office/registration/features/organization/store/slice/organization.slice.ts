import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../store/app.store'

// Define a type for the slice state
interface OrganizationState {
    sideView: '' | 'activity-audit' | 'note' | 'help';
    isFullScreen: boolean;
}

// Define the initial state using that type
const initialState: OrganizationState = {
    sideView: '',
    isFullScreen: false
}

export const organizationSlice = createSlice({
    name: 'organiztion',
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

export const { toggleScreenSize, setSideView } = organizationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSideView = (state: RootState) => state.organization.sideView;
export const selectIsFullScreen = (state: RootState) => state.organization.isFullScreen;

export default organizationSlice.reducer;