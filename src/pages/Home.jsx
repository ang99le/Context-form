import{useContext} from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
   
 const Home=()=>{
    const {setUsername,setPassword,setBirthday}=useContext(Context);
    const Navigate=useNavigate();
   

    const onChangeUsername=(e)=>{setUsername(e.target.value)}
    const onChangePassword=(e)=>{setPassword(e.target.value)}
    const onChangeBirthday=(e)=>{setBirthday(e.target.value)}

    return(
        <div className="loginContainer">
            <h5>
            welcome Dear User Plaese Enter Your Informations
            </h5>
            <form>
              <label>Username</label>
                <br/>
                <input  type="text" placeholder="Please Enter Your username" onChange={onChangeUsername}/>
                <br/><br/>
                <label>Password</label>
                <br/>
                <input type="password" placeholder=" Please Enter Your password" onChange={onChangePassword}/>
                <br/><br/>
                <label>Date Of Birth</label>
                <br/>
                 <input type="date" onChange={onChangeBirthday}/>
                 <br/>
                <button type="submit" onClick={()=>{Navigate('/Login')}}> submit</button>
            </form>
        </div>
    )
}

export default Home;