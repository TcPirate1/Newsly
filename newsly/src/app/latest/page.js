import { fetchFeeds } from "@/components/component_data/articles";
import Pagination from "@/components/pagination";

export default async function latest({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const itemsPerPage = 5;

  // Fetch all articles from feeds
  const feeds = await fetchFeeds();
  const allArticles = feeds.flatMap((feed) => feed.articles);

  // Calculate total pages
  const totalPages = Math.ceil(allArticles.length / itemsPerPage);

  // Get articles for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = allArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="latest-container">
      <h1>Latest News</h1>
      <ul>
        {currentArticles.map((article, index) => (
          <li key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}