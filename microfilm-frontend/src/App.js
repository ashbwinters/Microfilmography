import React, { Component } from 'react';
import './App.css';

const newspapersByState = `https://chroniclingamerica.loc.gov/newspapers.json`


class App extends Component {
  state = {
    archive: [],
    library:[]
  }

  componentDidMount() {
    this.showArchives()
  }

  showArchives = () => {
    fetch(newspapersByState)
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MicroFilmography</h1>
        </header>
  
      </div>
    )
  }
}

export default App;
