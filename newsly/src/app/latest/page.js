import { fetchFeeds } from "@/components/component_data/articles";

export default async function latest() {
    const feeds = await fetchFeeds();

    return (
        <div className="latest-container">
            <h1>Latest News</h1>
            {feeds.map((feed, index) =>
            <div key={index}>
                <h3>{feed.title}</h3>
                <ul>
                    {feed.articles.length > 0 ? (
                        feed.articles.map((article, articleIdx) => (
                            <li key={articleIdx}>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    {article.title}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li>No Articles Avaliable</li>
                    )}
                </ul>
            </div>
            )}
        </div>
    );
}