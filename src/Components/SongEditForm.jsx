// edit form
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const SongEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name:"",
        artist:"",
        album:"",
        time:"",
        is_favorite: false,
    });
    const handleTextChange = () => {}
    const handleCheckBoxChange = () => {}
    const handleSubmit = () => {}

    const updateSong = () => {
        // fetch call for PUT method
    }

    // useEffect to fill form with song data (on page load so [ ] for dependency)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Song:</label>
            <input
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Song"
                required
            />
            <label htmlFor="artist">Artist:</label>
            <input
                id="artist"
                value={song.artist}
                type="text"
                onChange={handleTextChange}
                placeholder="Artist"
                required
            />
            <label htmlFor="album">Album:</label>
            <input
                id="album"
                value={song.album}
                type="text"
                onChange={handleTextChange}
                placeholder="Album"
                required          
            />
            <label htmlFor="time">Time:</label>
            <input
                id="time"
                value={song.time}
                type="text"
                pattern="[0-9]{1,2}:[0-5][0-9]"
                onChange={handleTextChange}placeholder="mm:ss"
                required
            />
            <label htmlFor="is-favorite">Is Favorite?</label>
            <input
                id="is_favorite"
                type="chackbox"
                onChange={handleCheckBoxChange}
                checked={song.is_favorite}
            />
        </form>
    </div>
  )
}

export default SongEditForm;