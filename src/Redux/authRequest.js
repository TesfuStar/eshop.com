import { loginFailure, loginStart, updateFailure,registerStart,registerSuccess,registerFailure,
    loginSuccess, logouting,updateProfile,updateSuccess, } from "./userReducer"
import {publicRequest,userRequest} from '../request'
import { addToOrder, orderFailed, orderStart } from "./orderReducer";

export const login = async(dispach,user)=>{
    dispach(loginStart());
    try{
        const response = await publicRequest.post("/login",user)
        dispach(loginSuccess(response.data))
    }catch(err){
        dispach(loginFailure())
    }
}

//logout

export const logout=(dispach)=>{
    dispach(logouting());

}


//register

export const register = async(dispach,user)=>{
    dispach(registerStart());
    try{
        const response = await publicRequest.post("/register",user)
        dispach(registerSuccess(response.data))
    }catch(err){
        dispach(registerFailure())
    }
}
//update user
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const id = currentUser?._id;
const TOKEN = currentUser?.accessToken;



export const updateUser=async(dispach,user)=>{
  dispach(updateProfile());

  try{
      const res = await userRequest.put(`/user/${id}`,user)
      dispach(updateSuccess(res.data))
  }catch(err){
      dispach(updateFailure())
  }
}

//order products


export const orderProduct = async(dispach,orderitems)=>{
    dispach(orderStart());
    try{
        const response = await userRequest.post("/order",orderitems)
        dispach(addToOrder(response.data))
    }catch(err){
        dispach(orderFailed())
    }
}


//get products