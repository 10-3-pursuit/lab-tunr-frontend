import { useState, useEffect } from 'react';

function PlaylistForm({ playlistDetails, handleEdit, handleAdd, toggleView, children }) {
  const [newOrUpdatedPlaylist, setNewOrUpdatedPlaylist] = useState({
    name: '',
    category: '',
    description: '',
    song_id: '',
  });

  // useEffect to populate form fields with playlistDetails when editing
  useEffect(() => {
    if (playlistDetails) {
      setNewOrUpdatedPlaylist(playlistDetails);
    }
  }, [playlistDetails]);

  const handleTextChange = (event) => {
    setNewOrUpdatedPlaylist({
      ...newOrUpdatedPlaylist,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (playlistDetails) {
      handleEdit(newOrUpdatedPlaylist);
      toggleView();
    } else {
      handleAdd(newOrUpdatedPlaylist);
    }
    setNewOrUpdatedPlaylist({
      name: '',
      category: '',
      description: '',
      song_id: '',
    });
  };

  return (
    <div className="PlaylistForm">
      {children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newOrUpdatedPlaylist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Playlist name"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          value={newOrUpdatedPlaylist.category}
          onChange={handleTextChange}
          placeholder="Playlist category"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          type="text"
          value={newOrUpdatedPlaylist.description}
          placeholder="Playlist description"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PlaylistForm;
