import { fetchArticles, allFeeds } from "@/components/component_data/articles";

export default async function latest() {
    const feedPromises = allFeeds.filter((feed) => feed.link).map(async (feed) => {
        const data = await fetchArticles(feed.link);
        return data;
    })
    const articles = await Promise.all(feedPromises);

    return (
        <div className="latest-container">
            <h1>Latest from RNZ</h1>
            <ul>
                {articles.map((item, index) => (
                    <li key={index} className="articles">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        <p>{item.pubDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}