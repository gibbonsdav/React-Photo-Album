import React from "react"
import { Link } from "react-router-dom"
import "../styles/myalbums.css"
import axios from "axios"
import { useState, useEffect } from "react"

export default props => {
  const [albums, setAlbums] = useState([])

  function fetchAlbums() {
    axios.get("/albums").then(resp => {
      setAlbums(resp.data)
    })
  }
  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <div className="container">
      <div className="title">
        <p>My Albums</p>
      </div>

      <div className="albums">
        {albums.map(album => (
          <Link to={"/albums/" + album.id}>
            <div className="albumbox">
              <img src={album.coverPhoto} />
              <p>{album.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
