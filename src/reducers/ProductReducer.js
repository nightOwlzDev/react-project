import type from '../actions/types'

export default function(state = [] ,action){

    switch (action.type) {
        case type.PRODUCTS_FETCH:
            return action.payload
        default:
            return state;
    }
    


}

