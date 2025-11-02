import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    
    const handleLikeToggle = (e) => {
        e.stopPropagation(); 
        setIsLiked(prev => !prev);
    };
    return (
        <div className="product-card">
            <img 
                src={product.image} 
                alt={product.title}
                className='product-img'
            />
            <button className="wishlist-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                 <FaHeart 
                    size={24} // A slightly larger size for visibility
                    color={isLiked ? 'red': 'grey'}
                    onClick={handleLikeToggle}
                />
            </button>
            
            <p className="product-name">{product.title}</p>
            {/* NOTE: Placeholder for 'OUT OF STOCK' tag as seen in With Filter.jpg */}
            {product.outOfStock && <div className="out-of-stock-tag">OUT OF STOCK</div>}
        </div>
    );
};

export default ProductCard;