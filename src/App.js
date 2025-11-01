import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFilterExpandedMobile, setIsFilterExpandedMobile] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const isMobile = screenWidth <= 768;

    useEffect(() => {
        // --- API/Data Fetching from Fake Store API ---
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch up to 20 products for a full grid display
                const response = await axios.get('https://fakestoreapi.com/products?limit=20');
                
                // The API provides different fields (e.g., 'title', 'image'). 
                // We map them to simulate the design's product structure.
                setProducts(response.data); 
            } catch (err) {
                console.error('API Error:', err);
                setError('Failed to fetch products. Please check the API status or your network connection.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

        // --- Responsive Listener ---
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileFilter = () => {
        setIsFilterExpandedMobile(prev => !prev);
    };
    
    // In a real app, filtering logic would go here, based on the `filters` state (omitted for brevity)
    const filteredProducts = products; 

    // --- Conditional Rendering for Loading/Error States ---
    if (loading) {
        return <div className="loading-screen">Loading products, please wait...</div>;
    }

    if (error) {
        return <div className="error-screen">{error}</div>;
    }

    return (
        <div className="app">
            <Header />
            <main className="product-listing-page">
                <section className="plp-header">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan elit nec elementum dolor.</p>
                </section>
                
                <div className="plp-content container">
                    {/* Filters rendered based on desktop or mobile toggle state */}
                    {(!isMobile || isFilterExpandedMobile) && (
                        <Filters 
                            isMobile={isMobile}
                            isExpanded={isFilterExpandedMobile}
                            onToggleFilter={toggleMobileFilter}
                        />
                    )}
                    
                    <section className="product-main">
                         <div className="grid-controls">
                            <div className="filter-status">
                                {/* Mobile filter button only shows if collapsed */}
                                {isMobile && !isFilterExpandedMobile && (
                                    <Filters isMobile={true} isExpanded={false} onToggleFilter={toggleMobileFilter} />
                                )}
                                <p>{filteredProducts.length} PRODUCTS</p>
                            </div>
                            <div className="sort-by">
                                <label htmlFor="sort-select">RECOMMENDED 🔽</label>
                            </div>
                        </div>

                        <ProductGrid products={filteredProducts} />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;