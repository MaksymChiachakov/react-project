// Traine | Example (Counter):

// The code from docs

import { createSlice } from '@reduxjs/toolkit'
import { incrementAction, decrementAction, incrementByAmountAction } from './counterActions'

// Наш state для counter
const initialState = {
    value: 0,
}


// createSlice - функція, яка приймає у себе об'єкт налаштувань і вона повертає саме наш Slice
export const counterSlice = createSlice({
    name: 'counter', // ім'я
    initialState, // наш state
    // reducer - це об'єкт, який приймає у себе методи для обробки нашого store 
    reducers: {
        // increment бери наш глобальний state по ключу 'counter' та робить з ним маніпуляції (додає + 1)
        increment: incrementAction,
        decrement: decrementAction,
        incrementByAmount: incrementByAmountAction,
    },
})

// Example:
// incrementByAmount(5) -- 5 - тут це і є 'action.payload'

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer