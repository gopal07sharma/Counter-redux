import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../reducers/slice'
export const store = configureStore({
        reducer:{counterSlice}
})
