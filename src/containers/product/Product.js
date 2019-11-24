import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import axios from 'axios'   

class Product extends Component {

    constructor(props){

        super(props)
        this.state = {products : null}
        this.delProduct = this.delProduct.bind(this)

    }

    componentDidMount(){

            axios.get("http://localhost:9000/products").then(res =>{

                this.setState({ products : res.data })

            })

    }


    delProduct =(product) =>{

        axios.delete(`http://localhost:9000/products/${product._id}`).then(res =>{

            axios.get("http://localhost:9000/products").then(res =>{

                    this.setState({ products : res.data })

            })
    })

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
                                <button className="btn btn-success title float-right">เพิ่ม</button>
                            </div>
                        </div>
                        <ProductList products={this.state.products} 
                            onDelProduct={this.delProduct} />
                    </div>
                <Footer company="HP" email="night@hp.com" />
            </div>
        )
    }
}

export default Product
