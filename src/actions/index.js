export const addToCart = productId => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            productId
        }
    };
};