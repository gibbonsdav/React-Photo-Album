import React from "react"
import axios from "axios"

export function getAlbums() {
  const [albums, setAlbums] = useState([])
  const id = props.match.params.id

  const [photos, setPhotos] = useState([])

  const [albumname, setAlbumName] = useState([])
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/albums/${id}?_embed=photos`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
