import { fetchArticles, allFeeds } from "@/components/component_data/articles";

export default async function searchResult({params}) {
    const { feed } = params;

    const selectedFeed = allFeeds.find((f) => f.title.toLocaleLowerCase() === feed.toLocaleLowerCase());

    if (!selectedFeed) {
        return <div>Not found</div>;
    }

    const { title, items } = await fetchArticles(selectedFeed);

    return (
        <div>
            <h1>{title} articles</h1>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}