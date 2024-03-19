import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
        <Link to="/">
            <h1>Tunr</h1>
        </Link>
        <NavBar/>
    </header>
  )
}

export default Header;