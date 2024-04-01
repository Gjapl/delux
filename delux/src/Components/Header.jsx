import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><HashLink to={"#my-store-101321525"}>Store</HashLink></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact us</Link></li>
                </ul>
            </nav>
        </header>
    );
}