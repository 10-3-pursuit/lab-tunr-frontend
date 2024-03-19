import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <button>
            <Link to="/songs">All Songs</Link>
        </button>
        <button>
            <Link to="/songs/new">Add New Song</Link>
        </button>
    </nav>
  )
}

export default NavBar;