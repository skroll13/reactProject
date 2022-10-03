import React from 'react'
// import "~@flaticon/flaticon-uicons/css/all/all";
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                Spells List <img src='https://www.dnd5eapi.co/public/favicon.ico' alt='red 20 sided dice' style={{width: "40px"}}></img>
            </div>
            <div>
                <a href='https://github.com/skroll13/reactProject'
                target="blank"
                rel="noopener noreferrer"
                >

            <button className="devicon-github-original"></button>
          
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header