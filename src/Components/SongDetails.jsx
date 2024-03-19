// Show one
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const SongDetails = () => {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
    </article>
  )
}

export default SongDetails;