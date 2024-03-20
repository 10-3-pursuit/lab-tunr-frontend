import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/bookmarks/${id}/reviews`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.allPlaylists) {
                    setPlaylists(data.allPlaylists);
                }
            })
            .catch((error) => console.error("Error fetching playlists:", error));
    }, [id]);

    return (
        <div>
            <h1>Playlists Song is Included In</h1>
        </div>
    );
}

export default Playlists;