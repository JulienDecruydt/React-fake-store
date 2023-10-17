import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // { type: 'cart/addItem', payload: {....} }
            const newItem = action.payload
            state.push(newItem)
        },
        deleteItem: (state, action) => {
            // { type: 'cart/deleteItem', payload: 1 }
            state = state.filter(c => c.id !== action.payload)
        }
    }
})

export default cartSlice;