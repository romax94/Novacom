import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state, props) => {
    return {
        items: state.reducer.cartProducts.map(id => getProduct(state, { id }))
    }
};

function getProduct(state, props) {
    return state.reducer.products.find(item => item.id === props.id);
};

export default connect(mapStateToProps)(Cart);