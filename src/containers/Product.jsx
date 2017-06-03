import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id))
    };
};

export default connect(null, mapDispatchToProps)(Product);