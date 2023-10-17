import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        logged: false,
        user: null
    },
    reducers: {
        setLogged: (state, action) => {
            state.logged = !state.logged
        },

        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice;