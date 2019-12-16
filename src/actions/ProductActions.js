
import axios from 'axios'
import type from './types'


export const productFetch = _id =>{

    return dispatch =>{
        axios.get(`http://localhost:9000/product/${_id}`).then(res =>{

            dispatch({type : type.PRODUCT_FETCH,payload : res.data})

        })
    }
   
        
}

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


export const productCreate = values =>{

    return dispatch =>{

        axios.post("http://localhost:9000/products/" , values).then(res =>{ 

            dispatch({ type : type.PRODUCT_CREATE})

        })

    }

}


export const productUpdate = (_id,values) =>{

    return dispatch =>{

        axios.put(`http://localhost:9000/product/${_id}` ,values).then(res =>{ 
            
            dispatch({ type : type.PRODUCT_UPDATE})

        })

    }

}



