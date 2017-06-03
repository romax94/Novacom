import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = state => {
    return {
        products: state.reducer.products
    }
};

export default connect(mapStateToProps)(ProductList);