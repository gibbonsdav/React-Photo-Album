import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import "../styles/albumname.css"
import myalbums from "./myalbums"
// import "../actions/actionfile.js"

export default props => {
  const [photos, setPhotos] = useState([])

  const [albumname, setAlbumName] = useState([])

  // function fetchAlbums() {
  //   axios.get("/albums").then(resp => {
  //     setAlbums(resp.data)
  //   })
  // }

  function fetchPhotos(id) {
    axios.get(`/albums/${id}?_embed=photos`).then(resp => {
      setPhotos(resp.data.photos)
      setAlbumName(resp.data.name)
    })
  }

  // function fetchAlbumName() {
  //   axios.get("`/albums/${id}?_embed=photos`").then(resp => {
  //     setAlbumName(resp.data)
  //   })
  // }

  useEffect(() => {
    const id = props.match.params.id
    fetchPhotos(id)
  }, [])

  return (
    <div className="container">
      <p>{albumname}</p>
      {photos.map(photo => (
        <Link to={"/picname/" + photo.id}>
          <img src={photo.url} />
        </Link>
      ))}
    </div>
  )
}
