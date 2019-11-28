
import axios from 'axios'


export const orderFetch = () =>{

    return dispatch =>{
        axios.get("http://localhost:9000/orders").then(res =>{

            dispatch({type : 'orders_fetch',payload : res.data})

        })
    }
   
        
}


export const orderDelete = () =>{


        
}



