import React, { Component } from 'react'

class Calculator extends Component {

    showOrders = (orders) =>{

        if (!orders || orders.length == 0) {
            
            return <li className="text-right text-muted">ไม่มีสินค้าค่ะ</li>

        }else{
            
            return orders.map(order =>{
                return (
                <li className="text-right text-success title">
                {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                <button onClick={() => this.props.onDelOrder(order.product)} className="btn btn-light btn-sm">X</button>
                </li>
                )

            })                   

        }

    }

    render() {

        const {totalPrice , orders} = this.props

        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr/>
                <button onClick={ () => this.props.onConfirmOrder()} className="btn btn-block btn-danger title">ยืนยัน</button>
                <button onClick={ () =>  this.props.onCancelOrder()} className="btn btn-block btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator
