import React from 'react';
import{useContext} from "react";
import Context from "../context/Context";

const Login =() =>{
const {username,password,birthday}=useContext(Context);
    return(
        <div>
            <h1>Welcome Back : {username} </h1>
                <label>Your Password is:</label>
                <br/>
                 {password}
                <br/>
                <label>Your Birthday is:</label>
                <br/>
               {birthday}
           
        </div>
    )
}
export default Login;