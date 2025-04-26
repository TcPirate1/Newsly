"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchToggle() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedQuery = query?.trim();
        if (trimmedQuery) {
            // trimmedQuery has to be the same name as the params passed to dynamic route
            router.push(`/results/${trimmedQuery.toLowerCase()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            id="feed-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="RNZ, Stuff, VScode etc."
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="news">News</option>
                <option value="dev">Developer (WIP)</option>
                <option value="tech">Tech (WIP)</option>
            </select>
            <button type="submit">
                <FaSearch/>
            </button>
        </form>
    );
}