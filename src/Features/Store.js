import { configureStore } from "@reduxjs/toolkit";
import SelectionTypeReducer from './SelectionType'
export const Store = configureStore({
    reducer: {
        SelectionTypeReducer: SelectionTypeReducer
    }
})
