import React from 'react';
import SearchInput from './SearchInput';
import { getAlbums } from '../utils/api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(artist) {
    this.setState(() => ({artist}))
    getAlbums(artist)
      .then((albums) => {
        console.log("\n\nAlbums: ", albums)
      })
  }



  render() {
    const {artist} = this.state;
    console.log("\n\nApp State (render)", this.state)
    return (
      <div className='container'>
        <SearchInput 
          onSubmit={this.handleSubmit}
        />
        <h1>{artist}</h1>
      </div>
    )
  }
}

export default App;