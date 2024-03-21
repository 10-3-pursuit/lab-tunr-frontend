import React, { useState } from 'react';
import PlaylistForm from './PlaylistForm';

function Playlist({ playlist, handleDelete, handleEdit }) {
  const [viewEditForm, setViewEditForm] = useState(false);

  const toggleView = () => {
    setViewEditForm(!viewEditForm);
  };

  return (
    <div className="Playlist">
      {viewEditForm ? (
        <PlaylistForm
          playlistDetails={playlist}
          handleEdit={handleEdit}
          toggleView={toggleView}
        />
      ) : (
        <div>
          <h4>{playlist.name}</h4>
          <p>Category: {playlist.category}</p>
          <p>Description: {playlist.description}</p>
        </div>
      )}
      <div className="playlist-actions">
        <button onClick={toggleView}>{viewEditForm ? 'Cancel' : 'Edit Playlist'}</button>
        <button onClick={() => handleDelete(playlist.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Playlist;
