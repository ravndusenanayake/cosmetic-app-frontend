
import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header() {
    console.log("Header component rendered")
    return (
        <div id="header" className="header" >
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <a href="https://www.google.com">Google</a>

            <UserData />
        </div>
    )
}