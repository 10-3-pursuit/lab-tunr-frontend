import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Tuner</Link>
      </h1>
    </nav>
  );
}

