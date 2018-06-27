import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({artist: value}))
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.artist
    );
  }

  render() {
    const {artist} = this.state

    return (
      <div className="row justify-content-center search-input-container">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <form 
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="artist">Enter an Artist</label>
                  <input 
                    id="artist"
                    type="text"
                    className="form-control"
                    value={artist}
                    onChange={this.handleChange}
                    autoComplete="off"
                    placeholder="artist name"
                  />
                </div>
                <button
                  className='btn btn-primary'
                  type='submit'
                  disabled={!artist}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchInput;
