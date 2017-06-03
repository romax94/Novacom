import products from '../api/data.json';
import { ADD_TO_CART } from '../constants/actionTypes'; 

let initialState = {
    products,
    cartProducts: [5]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload.productId]
            }
        default:
            return state;
    }
};