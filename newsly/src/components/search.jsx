"use client";

import { useState, useRef, useEffect } from "react";
import { FASearch } from "react-icons/fa";

export default function SearchToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    const toggleSearch = () => {
        setIsOpen((prev) => (!prev));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target) && !event.target.closest('.search-icon')) {
                setIsOpen(false);
            }
        };

    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    else {
        document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]
});

    return (
        <div className="search-container">
            <button className="search-icon" onClick={toggleSearch} aria-label="Toggle Search">
                <FASearch/>
            </button>
            {isOpen && (
                <input ref={inputRef} type="text" className="search-input" placeholder="Search"/>
            )}
        </div>
    );
}