/** @format */

import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techystar</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <li>
          
            
            <a href="https://www.instagram.com/_.sanjeeb._21/" target={"blank"}>
            <AiFillInstagram  size={'35px'} /></a>
           
          
          
          
           
            <a href="https://twitter.com/home?lang=en-in" target={"blank"}>
            <AiFillTwitterCircle size={'35px'} />
            </a>
          
          
            <a href="https://github.com/Sanjeeb021" target={"blank"}>
            <AiFillGithub size={'35px'} />
            </a>
          
          
           
            <a
              href="https://www.linkedin.com/in/sanjeeb-sethy-05039a247/"
              target={"blank"}
              
            >
              <AiFillLinkedin size={'35px'}/>
            </a>
          
        </li>
      </div>
    </footer>
  );
};

export default Footer;
