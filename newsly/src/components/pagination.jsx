'use client';

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link
          href={createPageLink(currentPage - 1)}
          style={{
            textDecoration: "underline",
          }}
        >
          Previous
        </Link>
      )}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={createPageLink(currentPage + 1)}
          style={{
            textDecoration: "underline",
          }}
        >
          Next
        </Link>
      )}
    </div>
  );
}