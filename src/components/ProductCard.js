import React from 'react';
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <img 
                src={product.image} 
                alt={product.title}
                className='product-img'
            />
            <button className="wishlist-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                 <CiHeart 
                    size={24} // A slightly larger size for visibility
                    color="#000" // Black color
                />
            </button>
            
            <p className="product-name">{product.title}</p>
            {/* NOTE: Placeholder for 'OUT OF STOCK' tag as seen in With Filter.jpg */}
            {product.outOfStock && <div className="out-of-stock-tag">OUT OF STOCK</div>}
        </div>
    );
};

export default ProductCard;