import React, { useState } from 'react';
// ... (filterOptions remain the same) ...

const filterOptions = {
    CUSTOMIZABLE: [],
    'IDEAL FOR': ['All', 'Work', 'Casual'],
    OCCASION: ['All', 'Travel', 'Daily'],
    WORK: ['All'], // Based on video, this is a separate group
    FABRIC: ['Cotton', 'Wool', 'Polyester', 'Leather'],
    SEGMENT: ['All'],
    'SUITABLE FOR': ['Men', 'Women'],
    'RAW MATERIALS': ['Leather', 'Recycled'],
};

const Filters = ({ isMobile, isExpanded, onToggleFilter }) => {
    // Local state to manage which filter groups are open/closed
    const [openFilters, setOpenFilters] = useState(Object.keys(filterOptions)); // Start expanded for desktop view

    const toggleFilterGroup = (filterKey) => {
        setOpenFilters(prev => 
            prev.includes(filterKey) ? prev.filter(k => k !== filterKey) : [...prev, filterKey]
        );
    };

    // If mobile and not expanded, the toggle button is rendered in App.js.
    // We only render the sidebar content here.
    return (
        <div className="filter-sidebar">
            
            {/* The "FILTERS / CLEAR ALL" row is not in the original Figma design's sidebar,
                but for functionality, we'll keep a CLEAR ALL link at the top. */}
            <div style={{ paddingBottom: '10px', fontSize: '12px', textAlign: 'right', textDecoration: 'underline', cursor: 'pointer' }}>
                CLEAR ALL
            </div>
            
            {/* Filter Groups */}
            {Object.keys(filterOptions).map(key => (
                <div key={key} className="filter-group">
                    <div className="filter-title" onClick={() => toggleFilterGroup(key)}>
                        {key} 
                        {/* If the group is NOT PRICE, show a selected option preview */}
                        {key !== 'PRICE' && <span>(All)</span>} 
                        <span style={{ marginLeft: '10px' }}>{openFilters.includes(key) ? '−' : '+'}</span>
                    </div>
                    {openFilters.includes(key) && (
                        <div className="filter-options" style={{ padding: '5px 0' }}>
                            {filterOptions[key].length > 0 ? (
                                filterOptions[key].map(option => (
                                    <label key={option} style={{ display: 'block', marginBottom: '5px' }}>
                                        <input type="checkbox" style={{ marginRight: '8px' }} />
                                        {option}
                                    </label>
                                ))
                            ) : (
                                // For single-line filters like CUSTOMIZABLE (checkbox)
                                <label>
                                    <input type="checkbox" style={{ marginRight: '8px' }} />
                                    Check me
                                </label>
                            )}
                        </div>
                    )}
                </div>
            ))}
            
            {/* Placeholder for Price Range Slider (as seen in video) */}
             <div className="filter-group">
                <div className="filter-title" onClick={() => toggleFilterGroup('PRICE RANGE')}>
                    PRICE RANGE 
                    <span>{openFilters.includes('PRICE RANGE') ? '−' : '+'}</span>
                </div>
                {openFilters.includes('PRICE RANGE') && (
                    <div className="filter-options" style={{ padding: '5px 0' }}>
                        {/* Price Slider UI placeholder */}
                        <p style={{fontSize: '12px'}}>$0 - $500</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;