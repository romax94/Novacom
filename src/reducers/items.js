import products from '../api/data.json';
import { ADD_TO_CART, SEARCH } from '../constants/actionTypes'; 

let initialState = {
    products,
    cartProducts: [],
    searchInput: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload.productId]
            }
        case SEARCH:
            return {
                ...state,
                searchInput: action.payload
            }
        default:
            return state;
    }
};