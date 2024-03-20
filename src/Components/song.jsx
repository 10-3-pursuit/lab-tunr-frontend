import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <h2>{song.title}</h2>
      </td>
      <td>
        <h2>{song.artist}</h2>
      </td>
      <td>
        <h2>{song.time}</h2>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Song;