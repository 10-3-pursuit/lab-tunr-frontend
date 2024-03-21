import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Playlist from './Playlist';
import PlaylistForm from './PlaylistForm';

const API = import.meta.env.VITE_BASE_URL

const Playlists = ()=> {
  const [playlists, setPlaylists] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/songs/${id}/playlists`)
      .then((res) => res.json())
      .then((data) => setPlaylists(data.allPlaylists))
      .catch((error) => console.error('Error fetching playlists:', error));
  }, [id]);

  const handleAdd = (newPlaylist) => {
    fetch(`${API}/songs/${id}/playlists`, {
      method: 'POST',
      body: JSON.stringify(newPlaylist),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaylists([data, ...playlists]))
      .catch((error) => console.error('Error adding playlist:', error));
  };

  const handleDelete = (id) => {
    fetch(`${API}/songs/${id}/playlists/${id}`, {
      method: 'DELETE',
    })
    //   .then(() => setPlaylists(playlists.filter((playlist) => playlist.id !== id)))
    //   .catch((error) => console.error('Error deleting playlist:', error));
    .then(()=>{
        const copyPlaylistArr = [...playlists]
        const indexDeletedPlaylist = copyPlaylistArr.findIndex(playlist => playlist.id === id)
        copyPlaylistArr.splice(indexDeletedPlaylist, 1)
        setPlaylists(copyPlaylistArr)
    },(error) => console.error(error))
    .catch((error) => console.warn('catch', error))
  };

  const handleEdit = (updatedPlaylist) => {
    fetch(`${API}/songs/${id}playlists/${updatedPlaylist.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPlaylist),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((responseJSON) => {
      const copyPlaylistArr = [...playlists]
        const indexUpdatedPlaylist = copyPlaylistArr.findIndex(playlist => playlist.id === updatedPlaylist.id)
        copyPlaylistArr[indexUpdatedPlaylist] = responseJSON
        setPlaylists(copyPlaylistArr)
    })
      .catch((error) => console.error('Error editing playlist:', error));
  };

  return (
    <div className="Playlists">
      <h2>Playlists</h2>
      <PlaylistForm handleAdd={handleAdd}>
        <h3>Add a New Playlist</h3>
      </PlaylistForm>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Playlists;

