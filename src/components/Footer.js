import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-top container">
            
            {/* 1. NEWSLETTER SECTION (2 units wide) */}
            <div className="footer-column newsletter-section">
                <h3>BE FIRST TO KNOW</h3>
                <p style={{ marginBottom: '15px', color: '#a0a0a0' }}>Sign up for updates from mettà muse.</p>
                <form className="subscribe-form">
                    <input 
                        type="email" 
                        placeholder="Enter your e-mail..." 
                    />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
            
            {/* 2. NAVIGATION LINKS (Starts on a new line in Figma) */}
            <div className="footer-column nav-links-group" style={{ gridColumn: '1 / span 1' }}>
                <h3 style={{ textTransform: 'lowercase' }}>mettā muse</h3>
                <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
            
            {/* 3. QUICK LINKS */}
            <div className="footer-column">
                <h3>QUICK LINKS</h3>
                <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            
            {/* 4. CONTACT & FOLLOW US/CURRENCY */}
            <div className="footer-column contact-follow-group">
                <h3>CONTACT US</h3>
                <p>+44 221 133 5380</p>
                <p>customercare@mettamuse.com</p>
                
                <h3 style={{ marginTop: '30px' }}>CURRENCY</h3>
                <p>🇺🇸 USD <span style={{ marginLeft: '5px' }}>&#9660;</span></p>
                <p style={{ fontSize: '10px', marginTop: '5px', lineHeight: '1.4' }}>
                    Transactions will be completed in Euros and a currency reference is available on hover.
                </p>
            </div>
        </div>
        
        {/* Footer Bottom (Payment and Copyright) */}
        <div className="footer-bottom container">
            <div className="payment-acceptance">
                <p style={{ color: 'white', marginBottom: '10px' }}>mettā muse ACCEPTS</p>
                {/* Payment Logos Placeholder */}
                <div style={{ display: 'flex', gap: '8px' }}>
                    {/* These icons should be represented by images or SVG components */}
                    <span style={{ padding: '4px 8px', background: 'white', borderRadius: '4px', fontSize: '10px' }}>G Pay</span>
                    <span style={{ padding: '4px 8px', background: 'white', borderRadius: '4px', fontSize: '10px' }}>Paypal</span>
                    {/* ... other payment icons ... */}
                </div>
            </div>
            <p style={{ fontSize: '10px', color: '#a0a0a0' }}>
                Copyright © 2023 mettamuse. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;