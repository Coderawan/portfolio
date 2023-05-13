import React from "react";
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';


const Footer = () =>{
    return(
<div style={{backgroundColor:"black",color:"gray",textAlign:"center"}}>
    <div className="link" style={{display:"inline-flex"}}>
        <ul style={{textAlign:"center",textDecoration:"none",listStyle:"none",display:"flex",justifyContent:"center"}}>
           <li style={{margin:"0px 10px"}}><Link> < BsFacebook/></Link>
         
           </li>
           
            <li style={{margin:"0px 10px"}}><Link to="https://www.instagram.com/"><FaInstagram/></Link></li>
            <li style={{margin:"0px 10px"}}><AiOutlineTwitter/></li>
        </ul>
    </div>

    <div>
        <p>Info  Support  Marketing</p>
        <p>Terms of use   Privacy Policy</p>
        <p>© 2011-2023 Abdullah portfolio.com</p>
    </div>
</div>
    )
} 

export default Footer