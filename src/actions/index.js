export const addToCart = productId => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            productId
        }
    };
};

export const onRemoveItem = productId => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            productId
        }
    };
};

export const onSearchProduct = value => {
    return {
        type: 'SEARCH',
        payload: value
    };
};