import { HashLink } from "react-router-hash-link";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Time with Perfection</h1>
                <HashLink to={"#my-store-101321525"} className="button" >Shop Now</HashLink>
            </div>
        </div>
    );
}