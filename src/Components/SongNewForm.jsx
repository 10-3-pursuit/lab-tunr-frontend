// create new form
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const SongNewForm = () => {
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name:"",
        artist:"",
        album:"",
        time:"",
        is_favorite: false,
    });
    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };
    const handleCheckBoxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong();
    };

    const addSong = () => {
        // fetch call for POST method
        fetch(`${API}/songs/`, {
            method: "POST",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            navigate(`/songs/`)
        })
        .catch((error) => console.error("catch", error));
    };

    const location = useLocation();

    let formTitle;
    if (location.pathname.includes('/songs/new')) {
        formTitle = 'Add New Song';
    } else if (location.pathname.includes('/songs/')) {
        formTitle = 'Edit Song';
    }

  return (
    <div className='form'>
        {<h2>{formTitle}</h2>}
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
                type="checkbox"
                onChange={handleCheckBoxChange}
                checked={song.is_favorite}
            />
            <button type="submit">Submit</button>
            <Link to={`/songs`}>
            <button>Cancel</button>
            </Link>
        </form>
        
    </div>
  )
}

export default SongNewForm;