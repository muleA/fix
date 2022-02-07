import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export default user.reducer