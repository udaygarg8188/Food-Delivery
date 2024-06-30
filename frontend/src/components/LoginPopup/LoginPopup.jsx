import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import axios from "axios"
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const {setToken,url} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Login")

    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })


    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}));
    }

    const onLogin = async (event) =>{
      event.preventDefault();
      let newUrl = url;
      if(currState === "Login"){
        newUrl += "/api/user/login";
      }
      else{
        newUrl += "/api/user/register"
      }

      try {
        const response = await axios.post(newUrl, data);
        console.log('Full Response:', response);
  
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error Data:', error.response.data);
          console.error('Error Status:', error.response.status);
          console.error('Error Headers:', error.response.headers);
          alert(error.response.data.message || 'An error occurred during the request.');
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No Response:', error.request);
          alert('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
          alert('An error occurred: ' + error.message);
        }
        console.error('Error Config:', error.config);
      }
    }  
    
  //  useEffect(()=>{
  //     console.log(response.data.message);
  //   },[data]); 

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==='Login' ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}

            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type='submit'>{currState==="Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
        {currState==="Login"
        ? <p>create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        :
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
    
      </form>
    </div>
  )
}

export default LoginPopup
