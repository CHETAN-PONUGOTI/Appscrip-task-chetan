import React from 'react';
// 1. FIX: Changed the incorrect 'CiShoppingBag' to the correct 'CiShoppingCart'
import { CiSearch, CiHeart, CiShoppingCart, CiGlobe } from 'react-icons/ci';
import  Logo from '../assests/Logo.png';

const Header = () => (
    <header className="header">
        
        <div className="header-top-bar">
            <span className='banner'>Lorem ipsum dolor</span>
            <span className='banner'>Lorem ipsum dolor</span>
            <span className='banner'>Lorem ipsum dolor</span>
        </div>
        
        <div className='header-main'>
            <div className="header-main-row">
                
                <div className="logo-section">
                    <img src={Logo} alt="logo" style={{width: '100%', height: '100%'}}/> 
                </div>
                
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                
                
                <div className="user-actions">
                    <CiSearch size={22} />
                    <CiHeart size={22} />
                    
                    <CiShoppingCart size={22} /> 
                    
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
                        <CiGlobe size={18} style={{ marginRight: '5px' }} /> 
                        ENG 
                        <span style={{ marginLeft: '5px' }}>&#9660;</span>
                    </div>
                </div>
            </div>
            <div>
                <nav className="nav-links">
                    <a href="/shop">SHOP</a>
                    <a href="/skills">SKILLS</a>
                    <a href="/stories">STORIES</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT US</a>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;