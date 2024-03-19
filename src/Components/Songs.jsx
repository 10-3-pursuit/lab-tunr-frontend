// index
import { useState, useEffect } from "react";

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
    <div>{console.log(songs)}</div>
  )
}

export default Songs;