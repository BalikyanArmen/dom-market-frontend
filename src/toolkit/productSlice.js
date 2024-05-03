import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        chosenProduct: null,
        selectedCategories: [],
        isLoggedIn: false,
        basketProducts: [
            {id: 1, name: "Product 1", price: 100, count: 1},
            {id: 2, name: "Product 2", price: 200, count: 1},
            {id: 3, name: "Product 3", price: 300, count: 1},
        ]
    },
    reducers: {
        chooseProduct: (state, action) => {
            state.chosenProduct = action.payload;
        },
        selectCategory: (state, action) => {
            state.selectedCategories = action.payload.data;
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setBasketProducts: (state, action) => {
            state.basketProducts = action.payload;
        },
        addProductToBasket: (state, action) => {
            state.basketProducts = [...state.basketProducts, action.payload];
        },
        handleDeleteBasketProduct: (state, action) => {
            state.basketProducts = action.payload.data.basketProducts.filter(product => product.id !== action.payload.data.productId);
        },
    },
});

export const {
    chooseProduct,
    selectCategory,
    setLoggedIn,
    setBasketProducts,
    handleDeleteBasketProduct,
    addProductToBasket
} = productSlice.actions;
export default productSlice.reducer;
