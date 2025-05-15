import { fetchArticles, allFeeds } from "./component_data/articles";

export default async function Hero() {
    const feeds = allFeeds.filter((feed) => feed.link).map(async feed => {
        return await fetchArticles(feed.link);
    });

    const allArticles = feeds.flatMap(feed => feed.articles);

    const randomArticles = Math.floor(Math.random() * allArticles.length);
    const featuredArticle = allArticles[randomArticles];

    return (
        <div className="hero-container">
            <h1>Featured Article</h1>
            {featuredArticle ? (
                <div>
                    <h3>{featuredArticle.title}</h3>
                    <p>{featuredArticle.pubDate}</p>
                    <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            ) : (
                <p>No articles avaliable</p>
            )}
        </div>
    );
}