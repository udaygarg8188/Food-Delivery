import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium provident veritatis eum neque quasi vero animi ipsum fuga dicta magni repellendus recusandae nisi nesciunt, pariatur exercitationem accusamus numquam nostrum. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-XXXXXXXXXX</li>
                    <li>contact@Cooking.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Cooking.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
