import React, { useState } from 'react';
import PlaylistForm from './PlaylistForm';

function Playlist({ playlist, handleDelete, handleEdit }) {
  const [viewEditForm, setViewEditForm] = useState(false);

  const toggleView = () => {
    setViewEditForm(!viewEditForm);
  };

  return (
    <div className="playlist">
      {viewEditForm ? (
        <PlaylistForm
          playlistDetails={playlist}
          handleEdit={handleEdit}
          toggleView={toggleView}
        />
      ) : (
        <div className="playlist">
          <h3>{playlist.name}</h3>
          Category: <p>{playlist.category}</p>
          Description: <p>{playlist.description}</p>
        </div>
      )}
      <div className="playlist-actions">
        <button onClick={toggleView}>{viewEditForm ? 'Cancel' : 'Edit Playlist'}</button>
        <button onClick={() => handleDelete(playlist.id)} className='delete'>Delete</button>
      </div>
    </div>
  );
}

export default Playlist;
