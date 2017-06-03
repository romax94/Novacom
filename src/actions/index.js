export const addToCart = productId => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            productId
        }
    };
};

export const onSearchProduct = value => {
    return {
        type: 'SEARCH',
        payload: value
    }
};