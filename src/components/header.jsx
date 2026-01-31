import "./header.css"
import UserData from "./userData";

export default function Header() {
    console.log("Header component rendered")
    return (
        <div id="header" className="header">
            <h1>Cosmetic App</h1>
            <p>Discover the latest beauty products</p>
            <UserData></UserData>
        </div>
    )
}