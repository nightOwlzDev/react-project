import React, { Component } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'
import axios from 'axios'
import swal from 'sweetalert'

class Monitor extends Component {

    constructor(props){

        super(props)
        this.state = {totalPrice : 0 , orders : []}
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
        
    }

    addOrder = (product) =>{

        let FindOrder = this.state.orders.find (order => order.product.productId == product.productId)
        if (FindOrder) {

            FindOrder.quantity++;

        }else{
            this.state.orders.push({product:product , quantity : 1})

        }

        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice : totalPrice , orders : this.state.orders});
    }

    delOrder = (product) =>{

        let FindOrder = this.state.orders.find (order => order.product.productId == product.productId)
        let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId)
        const totalPrice = this.state.totalPrice - (FindOrder.quantity * parseInt(FindOrder.product.unitPrice))
        this.setState({totalPrice : totalPrice , orders : resultOrder})

    }


    cancelOrder = () =>{


            this.setState({ totalPrice : 0 , orders : []})


    }


    confirmOrder =() =>{

            const { totalPrice , orders} = this.state
            if (orders && orders.length > 0) {
                
               const date = new Date ()
                axios.post("http://localhost:9000/orders" ,{
                    orderedDate : date,
                    totalPrice,
                    orders
                }).then(res =>{
                    
                    swal("Success!", "Add new Order Complete", "success");
                    this.setState({ totalPrice : 0 , orders : []})

                })

            }else{

                swal("Oops!", "Please Choose Something!", "error");

            }

    }

        
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList onAddOrder={this.addOrder} products={this.props.products}/>
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} orders={this.state.orders} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor
