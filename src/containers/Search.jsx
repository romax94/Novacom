import { connect } from 'react-redux';
import Search from '../components/Search';
import { onSearchProduct } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        onSearchProduct: value => dispatch(onSearchProduct(value))
    };
};

export default connect(null, mapDispatchToProps)(Search);