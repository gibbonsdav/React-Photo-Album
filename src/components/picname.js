import React from "react"
import { Link } from "react-router-dom"
// import myalbums from "./myalbums"
// import albumname from "./albumname"
import { useState, useEffect } from "react"

export default props => {
  const [photo, fetchPhotos] = useState([])

  useEffect(() => {
    const id = props.match.params.id
    fetchPhotos()
  }, [])

  return (
    <div>
      <p>picname</p>
      <img src={photo.url} />
    </div>
  )
}
