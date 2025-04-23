import Parser from "rss-parser";

export const rnzFeed = [
    "https://www.rnz.co.nz/rss/national.xml"
];

const parser = new Parser();

export async function fetchArticles(url) {
    const feed = await parser.parseURL(url);
    return feed.items;
}