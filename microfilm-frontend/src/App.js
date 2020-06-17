import React, { Component } from 'react';
import './App.css';
import Authentication from './Authentication';
import Archive from './Archive';


class App extends Component {  
  state = {
    month: 6,
    year: 1865,
    archives: []
    // library:[]
  }
  
  nytArchives = `https://api.nytimes.com/svc/archive/v1/${this.state.year}/${this.state.month}.json?api-key=${process.env.REACT_APP_NYT_KEY}`

  componentDidMount() {
    this.showArchives()
  }

  showArchives = () => {
    fetch(this.nytArchives)
      .then(response => response.json())
      .then(results => this.setState({
        archives: results.response.docs
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MicroFilmography</h1>
        </header>
        <div>
          <Authentication/>
        </div>
        <div>
         <Archive archives={this.state.archives} key={`${this.state.month}-${this.state.year}`}/>
        </div>
      </div>
    )
  }
}

export default App;
