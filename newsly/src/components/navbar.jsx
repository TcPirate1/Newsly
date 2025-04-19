import Link from "next/link";
import About from "@/components/about";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div>
            <Link href="/" rel="noopener noreferrer">Newsly</Link>
            </div>
            <div className="nav-right">
            <button>Search</button>
            {/* <Link href={About}>About</Link> */}
            <Link href="#">Latest News</Link>
            </div>
        </div>
    );
}

NavBar.displayName = "NavBar";

export default NavBar;