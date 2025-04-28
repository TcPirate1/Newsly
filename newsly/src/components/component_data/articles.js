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
  {
    title: "Christchurch News",
    link: "https://newsline.ccc.govt.nz/news/stories",
    category: "news",
  },
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
  {
    title: "",
    link: "",
    category: "",
  },
];

const parser = new Parser();

export async function fetchArticles(url) {
    const feed = await parser.parseURL(url);
    return feed;
}