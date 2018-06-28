import axios from 'axios'

const baseItunesUrl = 'https://itunes.apple.com/search'

export function getAlbums(artist) {
  console.log("\nartist", artist)
  const encodedUri = window.encodeURI(`${baseItunesUrl}?term=${artist}`)
  console.log("\nEncoded Uri", encodedUri)
  return axios.get(encodedUri)
}