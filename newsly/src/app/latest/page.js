import { fetchArticles, allFeeds } from "@/components/component_data/articles";

async function fetchFeeds() {
    const feedPromise = allFeeds.filter((feed) => feed.link).map(async feed =>{
        try {
          const parsedFeed = await fetchArticles(feed.link);
          if (!parsedFeed || !parsedFeed.items) {
            console.warn(`No items found in feed: ${feed.title}`);
            return [];
          };
          return parsedFeed.items.slice(0, 5).map((item) => ({
            title: item.title || "No title",
            link: item.link || "#",
            pubDate: item.pubDate || "",
            source: feed.title,
          }));
        } catch (error) {
          console.error(`Error fetching ${feed.title}:`, error);
          return [];
        };
    });

    const feeds = await Promise.all(feedPromise);
    return feeds.flat();
}

export default async function latest() {
    const articles = await fetchFeeds();

    return (
        <div className="latest-container">
            <h1>Latest News</h1>
            <ul>
                {articles.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}