import React from 'react';
import { connect } from 'react-redux';

import AllProducts from '../components/AllProducts';
import AdminProductsContainer from '../containers/AdminProductsContainer';

export class AllProductsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.currentUser && this.props.currentUser.isAdmin ? <AdminProductsContainer productList={this.props.productList} /> : <AllProducts productList={this.props.productList} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList,
        currentUser: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(AllProductsContainer);
