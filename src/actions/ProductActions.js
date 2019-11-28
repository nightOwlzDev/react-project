
import axios from 'axios'
import type from './types'

export const productsFetch = () =>{

    return dispatch =>{
        axios.get("http://localhost:9000/products").then(res =>{

            dispatch({type : type.PRODUCTS_FETCH,payload : res.data})

        })
    }
   
        
}

export const productsDelete = _id =>{

    return dispatch =>{

        axios.delete(`http://localhost:9000/products/${_id}`).then(res =>{

            axios.get("http://localhost:9000/products").then(res =>{

                dispatch({type : type.PRODUCTS_FETCH,payload : res.data})
    
            })

        })

    }
    
}



