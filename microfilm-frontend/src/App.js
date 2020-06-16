import React, { Component } from 'react';
import './App.css';
import Authentication from './Authentication';


class App extends Component {  
  state = {
    month: 1,
    year: 1851,
    archive: [],
    library:[]
  }
  
  nytArchives = `https://api.nytimes.com/svc/archive/v1/${this.state.year}/${this.state.month}.json?api-key=${process.env.REACT_APP_NYT_KEY}`

  componentDidMount() {
    // this.showArchives()
  }

  showArchives = () => {
    fetch(this.nytArchives)
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MicroFilmography</h1>
          <Authentication/>
        </header>
  
      </div>
    )
  }
}

export default App;
