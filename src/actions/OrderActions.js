
import axios from 'axios'
import type from './types'

export const ordersFetch = () =>{

    return dispatch =>{
        axios.get("http://localhost:9000/orders").then(res =>{

            dispatch({type : type.ORDERS_FETCH, payload : res.data})

        })
    }
   
        
}

export const ordersDelete = _id =>{

    return dispatch =>{

        axios.delete(`http://localhost:9000/orders/${_id}`).then(res =>{

            axios.get("http://localhost:9000/orders").then(res =>{

                dispatch({type : type.ORDERS_FETCH,payload : res.data})
    
            })

        })

    }
    
}



