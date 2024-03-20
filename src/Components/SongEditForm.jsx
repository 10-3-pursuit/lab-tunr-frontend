// edit form
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };
    const handleCheckBoxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong();
    } // uses updateSong as callback fx

    const updateSong = () => {
        // fetch call for PUT method
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => navigate(`/songs/${id}`))
        .catch((error) => console.error("catch", error));
    };

    // useEffect to fill form with song data (on page load so [ ] for dependency)
    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSong(data);
            })
            .catch((error) => console.error(error));
    }, [id]);

  return (
    <div className='form'>
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
            {/* <button>Submit</button> */}
            <input type="submit" />
                    {/* fixed error by adding a / in front of songs */}
        <Link to={`/songs/${id}`}>
            <button>Cancel</button>
        </Link>
        </form>


    </div>
  )
}

export default SongEditForm;