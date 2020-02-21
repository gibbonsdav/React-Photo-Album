import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import "../styles/albumname.css"

export default function(props) {
  const [albums, setAlbums] = useState([])
  const id = props.match.params.id

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
        <p>Album Name</p>
      </div>
    </div>
  )
}
