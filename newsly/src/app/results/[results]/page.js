import { fetchArticles, allFeeds } from "@/components/component_data/articles";

export default async function SearchResults({params}) {
    // name of const assigned to params has to be the same as the assigned const in router.push()
    const { results } = await params;

    const selectedFeed = allFeeds.find((f) => f.title.toLowerCase() === results.toLowerCase());

    if (!selectedFeed) {
        return <div>Not found</div>;
    }

    const { title, items } = await fetchArticles(selectedFeed.link);

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {(items.map((item, i) => (
                    <li key={i}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </li>
                )))}
            </ul>
        </div>
    );
}