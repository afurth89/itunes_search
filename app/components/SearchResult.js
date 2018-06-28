import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {album} = this.props
    console.log("Album", album)
    const artUrl = album.artworkUrl60;
    const title = album.collectionName;
    const key = album.collectionId;

    return (
      <div key={key} className="card" style={{width: "18em"}}>
        <img className="card-img-top" src={artUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-text">{title}</h5>
        </div>
      </div>
    )

  }
}

export default SearchResult;


