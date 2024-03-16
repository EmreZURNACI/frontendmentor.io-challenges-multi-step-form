import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    type: false,
    selectedPlan: "",
    addOns: []
}
export const SelectionType = createSlice({
    name: "SelectionType",
    initialState,
    reducers: {
        setType: (state) => {
            state.type = !state.type
        },
        setSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload
        },
        setAddOns: (state) => {
            const inputs = document.querySelectorAll("input[type='checkbox']")
            state.addOns.length = 0;
            Array.from(inputs).forEach((input) => {
                if (input.checked === true) {
                    state.addOns.push(
                        String(input.name).replace("_", " ").substring(0, 1).toUpperCase() +
                        String(input.name).replace("_", " ").substring(1, String(input.name).length));
                }
            });
        }
    }
})
export default SelectionType.reducer
export const { setType, setSelectedPlan, setAddOns } = SelectionType.actions