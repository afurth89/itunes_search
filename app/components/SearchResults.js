import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {albums} = this.props
    console.log("\n\SearchResults props (render)", this.props.albums)

    if (!(albums.length > 0)) { return null; }

    return (
      <ul>
        {albums.map((album) => {
          return (
            <li key={album.trackId}>
              {album.collectionName}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default SearchResults;
