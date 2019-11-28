import React,{Component} from 'react'

class ProductItem extends Component {

        constructor(props) {

            super(props);
            console.log('contstructor |' + props.productName)

        } 



            
        render() {
        const {productName,unitPrice,thumbnail} = this.props.product;  
            return (
                <div className="col-md-3 col-sm-6">
                    <img className="img-fluid img-thumbnail" src={thumbnail}/>
                    <h5 className="mt-2">{productName}</h5>
                    <p className="title text-right">{unitPrice} THB</p>

                    { this.props.onAddOrder &&
                    <button value={unitPrice} onClick={(e) => 
                        this.props.onAddOrder(this.props.product)} 
                        className="btn btn-block btn-primary">ซื้อ
                    </button>
                    }
                    { (this.props.onDelProduct || this.props.onEditProduct) &&
                    <button value={unitPrice} onClick={(e) => 
                        this.props.onEditProduct(this.props.product)} 
                    className="btn col-5 btn-warning">แก้ไข
                    </button>
                    }
                    { (this.props.onDelProduct || this.props.onEditProduct) &&
                    <button value={unitPrice} onClick={(e) => 
                        this.props.onDelProduct(this.props.product)} 
                        className="btn float-right col-5 btn-danger">ลบ
                    </button>
                    }


                    <hr/>
                </div>
            )
        }

}


export default ProductItem;