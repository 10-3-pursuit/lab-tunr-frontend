// Show one
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // link for back button to songs index view and link for edit form view

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
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name} by {song.artist}
      </h3>
      <ul>
        <li><strong>Album: </strong>{song.album}</li>
        <li><strong>Time: </strong>{song.time}</li>
      </ul>
      <div>
        <Link to={`/songs`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit Song</button>
        </Link>
      </div>
      <div>
        <button onClick={deleteSong}>Delete Song</button>
      </div>
      {/* playlist prop */}
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