import React from 'react'
import './Header.css'
import header from '../../assets/flat-lay-cabbage-bowl-with-onion-plate.jpg'

const Header = () => {
  return (
    <div className='header'>
      <img src={header} alt=''/>
      <div className="header-contents">
        <h2>Order your food here</h2>
        <p></p>
        <button>Menu</button>
      </div>
    </div>
  )
}

export default Header
