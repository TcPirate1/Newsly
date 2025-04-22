"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const route = useRouter();

    const toggleSearch = () => {
        setIsOpen((prev) => (!prev));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            route.push(`/searchResults?query=${encodeURIComponent(query.trim())}`);
            setQuery('');
            setIsOpen(false);
        }
    };


    return (
        <div className="search-container">
            <button className="search-icon" onClick={toggleSearch} aria-label="Toggle Search">
                <FaSearch/>
            </button>
            {isOpen && (
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                </form>
            )}
        </div>
    );
}

SearchToggle.displayName = "SearchToggle";

export default SearchToggle