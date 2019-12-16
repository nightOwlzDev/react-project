import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { productsFetch,productsDelete } from '../../actions/methodAction'


class Product extends Component {

    constructor(props){

        super(props)
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        
    }

    componentDidMount(){

        this.props.productsFetch()

    }


    editProduct =(product) =>{  

            this.props.history.push(`product/edit/${product._id}`)

    }



    delProduct =(product) =>{

        this.props.productsDelete(product._id)

    }


    render() {
        return (
            <div>
                <Header/>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <h1>สินค้า</h1>
                            </div>
                            <div className='col-6'>
                                <button className="btn btn-success title float-right" onClick={() => this.props.history.push(`product/add`)}>เพิ่ม</button>
                            </div>
                        </div>
                        { this.props.products && Array.isArray(this.props.products) && 
                        (<ProductList products={this.props.products} 
                            onDelProduct={this.delProduct} onEditProduct={this.editProduct} />)
                        }
                    </div>
                <Footer company="HP" email="night@hp.com" />
            </div>
        )
    }
}

const mapStateToProps = ( { products }) =>{

    return { products }

}


export default withRouter( connect(mapStateToProps, { productsFetch , productsDelete })(Product) )
