import Parser from "rss-parser";

export const allFeeds = [
  {
    title: "RNZ",
    link: "https://www.rnz.co.nz/rss/national.xml",
    category: "news",
  },
  {
    title: "Stuff",
    link: "https://www.stuff.co.nz/rss",
    category: "news",
  },
  // {
  //   title: "Christchurch News",
  //   link: "https://newsline.ccc.govt.nz/news/stories",
  //   category: "news",
  // },
  {
    title: "Github",
    link: "https:/github.blog/changelog/feed/",
    category: "dev",
  },
  {
    title: "Chocolatey",
    link: "https://feeds.feedburner.com/ChocolateyBlog",
    category: "dev",
  },
  {
    title: "VScode",
    link: "https://code.visualstudio.com/feed.xml",
    category: "dev",
  },
  {
    title: "Windows",
    link: "https://blogs.windows.com/feed",
    category: "tech",
  },
];

const parser = new Parser();

export async function fetchArticles(url) {
  try {
    return await parser.parseURL(url);
  } catch (err) {
    console.error(err);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }
      const xml = await response.text();
      return await parser.parseString(xml);
    } catch (xmlErr) {
      console.error(`Can't parse xml: ${xmlErr}`);
      return null;
    };
  };
}

export async function fetchFeeds() {
  const feedPromise = allFeeds.filter((feed) => feed.link).map(async feed => {
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
      };
  });

  return Promise.all(feedPromise);
}