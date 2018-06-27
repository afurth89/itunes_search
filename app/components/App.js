import React from 'react';
import SearchInput from './SearchInput';

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
  }

  render() {
    const {artist} = this.state;
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