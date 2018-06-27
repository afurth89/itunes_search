var React = require('react');
var SearchInput = require('./SearchInput');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <SearchInput />
      </div>
    )
  }
}

module.exports = App;