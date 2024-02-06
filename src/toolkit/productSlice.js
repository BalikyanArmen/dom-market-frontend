import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        chosenProduct: null,
        selectedCategories: [],
    },
    reducers: {
        chooseProduct: (state, action) => {
            state.chosenProduct = action.payload;
        },
        selectCategory: (state, action) => {
            state.selectedCategories = action.payload.data;
        },
    },
});

export const { chooseProduct, selectCategory } = productSlice.actions;
export default productSlice.reducer;
