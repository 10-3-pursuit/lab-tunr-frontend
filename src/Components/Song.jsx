// song table and link to single song
// used as prop in songs.jsx to populate table
import React from 'react'
import { Link } from 'react-router-dom';

const Song = ({ song }) => {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {song.name}
      </td>
      <td>
        {song.artist}
      </td>
      <td>
        {song.album}
      </td>
      <td>
        {song.time}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>🎵</Link>
      </td>
    </tr>
  )
}

export default Song;