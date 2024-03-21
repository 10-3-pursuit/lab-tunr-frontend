// Show one
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // link for back button to songs index view and link for edit form view
import Playlists from "./Playlists/Playlists";

const API = import.meta.env.VITE_BASE_URL;

const SongDetails = () => {
  const [song, setSong] = useState([]);
  const { id } = useParams(); // use to go to edit form link
  const navigate = useNavigate(); // for delete fx (navigate back to songs index view)

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  // deleteSong fx
  const deleteSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
    .then(() => navigate(`/songs`))
    .catch((error) => console.error(error));
  };

  return (
    <article>
      <section>
      <h2>Song</h2>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} <p>{song.name}</p> by <p>{song.artist}</p>
      </h3>
      <ul>
        <li><strong>Album: </strong><p>{song.album}</p></li>
        <li><strong>Time: </strong><p>{song.time}</p></li>
      </ul>
        <Link to={`/songs`}>
          <button>Back</button>
        </Link>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit Song</button>
        </Link>
        <button onClick={deleteSong} className="delete">
          Delete Song
        </button>
      </section>
      <Playlists/>
    </article>
  )
}

export default SongDetails;

// {
//   "name": "The Show Must Go On",
//   "artist": "Queen",
//   "album": "Innuendo",
//   "time": "4:23",
//   "is_favorite": true
// }