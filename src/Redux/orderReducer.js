import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const orderSlice = createSlice({
    name:'order',
    initialState:{
        orderItems:[],
        orderSuccess:false,
        orderFailure:false
    },
    reducers:{
        orderStart:(state,action)=>{
            state.orderFailure=false
        },
        addToOrder:(state,action)=>{
         state.orderItems.push(action.payload);
         state.orderSuccess=true
        },
        orderFailed:(state,action)=>{
            state.orderFailure=true
        }
    }
})

export const {addToOrder,orderFailed,orderStart} = orderSlice.actions
export default orderSlice.reducer

