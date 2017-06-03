import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = state => {
    return {
        products: state.reducer.products.filter(item => item.title.toLowerCase().includes(state.reducer.searchInput.toLowerCase()))
    }
};

export default connect(mapStateToProps)(ProductList);