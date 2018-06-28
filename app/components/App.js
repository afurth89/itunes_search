import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { getAlbums } from '../utils/api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      albums: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(artist) {
    this.setState(() => ({artist}))
    getAlbums(artist)
      .then(({data}) => {
        console.log("\n\nAlbums: ", data.results)
        let albumData = data.results
        this.setState(() => ({
          albums: albumData
        }))
      })
  }



  render() {
    const {artist, albums} = this.state;
    
    console.log("\n\nApp State (render)", albums)
    
    return (
      <div className='container'>
        <SearchInput 
          onSubmit={this.handleSubmit}
        />
        <h1>{artist}</h1>
        <SearchResults 
          albums={albums}
        />
      </div>
    )
  }
}

export default App;