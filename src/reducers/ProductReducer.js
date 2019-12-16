import type from '../actions/types'

export default function(state = [] ,action){

    switch (action.type) {
        case type.PRODUCTS_FETCH :
        case type.PRODUCT_FETCH :
            return action.payload
        case type.PRODUCT_CREATE :
            return { saved : true , message : "บันทึกสินค้าเรียบร้อยค่ะ" }
        case type.PRODUCT_UPDATE :
            return { ...state , saved : true , message : "บันทึกสินค้าเรียบร้อยค่ะ" }
        default:
            return state;
    }
    


}

