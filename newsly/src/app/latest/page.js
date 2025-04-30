import { fetchArticles, allFeeds } from "@/components/component_data/articles";

async function fetchFeeds() {
    const feedPromise = allFeeds.filter((feed) => feed.link).map(async feed =>{
        try {
          const parsedFeed = await fetchArticles(feed.link);

          const articles = parsedFeed.items.slice(0, 5).map(item => ({
            title: item.title ?? 'No title',
            link: item.link ?? '#',
            pubDate: item.pubDate ?? '',
          }));

          return {
            title: feed.title,
            articles,
          };

        } catch (error) {
          console.error(`Error fetching ${feed.title}:`, error);
          return {
            title: feed.title,
            articles: [],
          };
        };
    });

    return Promise.all(feedPromise);
}

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