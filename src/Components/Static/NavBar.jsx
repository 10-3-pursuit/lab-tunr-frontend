import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <div className="nav-buttons">
        <button>
            <Link to="/songs">All Songs</Link>
        </button>
        <button>
            <Link to="/songs/new">Add New Song</Link>
        </button>
        </div>
    </nav>
  )
}

export default NavBar;