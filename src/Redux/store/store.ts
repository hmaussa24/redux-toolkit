import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../slices/conuter.slices';

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export default store
