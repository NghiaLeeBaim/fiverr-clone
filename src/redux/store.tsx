import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserReducer/userReducer'



export const store = configureStore({
    reducer: {
        userReducer:userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type DispatchType= typeof store.dispatch