import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { ordersFetch,ordersDelete } from '../../actions/methodAction'

class Order extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

            this.props.ordersFetch()

    }

    delOrder =(order) =>{

            this.props.ordersDelete(order._id)

    }
    
    showOrders = () =>{

        return this.props.orders && this.props.orders.map(order =>{
                const date = new Date(order.orderedDate);
                return (
                <div key={order._id} className="col-md-3">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                        <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                    
                        {order.orders && order.orders.map(record =>{
                                return (
                                    <li key={record.product._id}>
                                        {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                    </li>
                                )
                        })}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
                )
        })

    }

    render() {
        return (
            <div>
            <Header/>
            <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
            </div>

            <Footer company="HP" email="night@hp.com" />
        </div>
        )
    }
}

const mapStateToProps = ( { orders }) =>{


    return { orders }

}

export default connect(mapStateToProps, { ordersFetch , ordersDelete })(Order)
