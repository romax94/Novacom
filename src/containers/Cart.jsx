import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state, props) => {
    return {
        items: state.reducer.cartProducts.map(id => getProduct(state, { id })),
        total: getTotal(state, props)
    }
};

let getProduct = (state, props) => {
    return state.reducer.products.find(item => item.id === props.id);
};

let getTotal = (state, props) => {
    return state.reducer.cartProducts.reduce((prev, id) => {
        const item = getProduct(state, { id });
        return prev + Number(item.price);
    }, 0);
};

export default connect(mapStateToProps)(Cart);