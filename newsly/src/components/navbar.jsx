import Link from "next/link";
import SearchToggle from "@/components/search";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div>
            <Link href="/" rel="noopener noreferrer">Newsly</Link>
            </div>
            <div className="nav-right">
            <SearchToggle/>
            <Link href="/about" rel="noopener noreferrer">About</Link>
            <Link href="#" rel="noopener noreferrer">Latest News</Link>
            <Link href="/contact" rel="noopener noreferrer">Contact us</Link>
            </div>
        </div>
    );
}

NavBar.displayName = "NavBar";

export default NavBar;