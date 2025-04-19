import { random_keyID } from "./component_data/uuid";

const Footer = () => {
    return (
        <div className="footer-container">
            <p> {new Date().getFullYear()} Newsly</p>
        </div>
    );
}

Footer.displayName = "Footer";

export default Footer;