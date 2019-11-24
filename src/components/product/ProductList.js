import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProducList extends Component {

    showProduct = () =>{

            return this.props.products && this.props.products.map(product =>(

                <ProductItem key={product.productId} product={product} 
                onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} />

            ))

    }

    render() {
        return (
            <div className="row">
                {this.showProduct()}
            </div>
        )
    }
}

export default ProducList
