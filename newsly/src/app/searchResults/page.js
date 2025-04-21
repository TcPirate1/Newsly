"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`api/search/query=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => setResults(data))
            .catch((err) => console.error(err));
        }
    }, [query]);

    return (
        <div>
            <h1>Search results for {query}:</h1>
            <ul>
                {results.map((item) => {
                    <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    );
}