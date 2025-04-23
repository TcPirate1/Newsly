import { fetchArticles, rnzFeed } from "@/components/component_data/articles";

export default async function latest() {
    const feedPromise = rnzFeed.map((url) => fetchArticles(url));
    const feed = await Promise.all(feedPromise);

    const articles = feed.flat().sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));

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