// index
import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL;
const Songs = () => {
    const [songs, setSongs]= useState([]);
    useEffect(()=>{
        fetch(`${API}/songs`)
            .then((res) => {
                return res.json();
            })
            .then((data)=> {
                setSongs(data);
            })
            .catch((error)=> console.error(error))
    }, []);
  return (
    <div>
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Is Favorite</th>
                        <th>Songs</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Time</th>
                        <th>View Song</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => {
                        return <Song key={song.id} song={song}/>
                    })}
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default Songs;