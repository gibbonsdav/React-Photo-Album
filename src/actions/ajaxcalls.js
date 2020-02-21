import  React from "react"
import axios from 'axios'
import { useState, useEffect } from 'react'


const [albums, setAlbums] = useState([])

function fetchAlbums() {
  axios.get('/albums').then(resp => {
    console.log(resp.data)
  },


useEffect() => {
  fetchAlbums()
}, [])

return (
  <div>
    <h1>Album List</h1>
      {albums.map(album => (
        <p key={'album' + album.id}>{album.name}</p>
      )
        )}
  </div>
)