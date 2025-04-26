import Parser from "rss-parser";

export const rnzFeed = [
    "https://www.rnz.co.nz/rss/national.xml"
];

export const allFeeds = [
    {
        title: "RNZ",
        link: "https://www.rnz.co.nz/rss/national.xml",
        category: "news"
    },
    {
        title: "Stuff",
        link: "https://www.stuff.co.nz/rss",
        category: "news"
    },
    {
        title: "",
        link: "",
        category: ""
    }
];

const parser = new Parser();

export async function fetchArticles(url) {
    const feed = await parser.parseURL(url);
    return feed;
}