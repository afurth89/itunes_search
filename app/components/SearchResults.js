import React from 'react';
import SearchResult from './SearchResult'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {albums} = this.props
    console.log("\n\SearchResults props (render)", this.props.albums)

    if (!(albums.length > 0)) { return null; }

    return (
      <div>
        {albums.map((album) => {
          return (
            <SearchResult 
              album={album}
            />
          )
        })}
      </div>
    )
  }
}

export default SearchResults;
