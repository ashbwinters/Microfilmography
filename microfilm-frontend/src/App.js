import React, { Component } from 'react';
import './App.css';
import NewspaperContainer from './NewspaperContainer';
import NewspaperDetail from './NewspaperDetail';

const proxyURL = `https://cors-anywhere.herokuapp.com/`
const newspapersURL = `https://chroniclingamerica.loc.gov/newspapers.json`


class App extends Component {
  state = {
    newspapers: [],
    usState: 'Texas',
    archives: [],
    newspaperDetails: {},
    isNewspaperSelected: false
  }

  componentDidMount() {
    this.getNewspapersByState()
  }

  getNewspapersByState = () => {
    fetch(`${proxyURL}${newspapersURL}?state=${this.state.usState}`)
      .then(response => response.json())
      .then(results => this.setState({ newspapers: results.newspapers}))
  }

  getSelectedNewspaper = (newspaperURL) => {
    fetch(`${proxyURL}${newspaperURL}`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          archives: results.issues,
          newspaperDetails: {
            title: results.name,
            location: results.place_of_publication,
            startYear: results.start_year,
            endYear: results.end_year 
          }
        })
      })
      .then(this.changeSelectedStatus())
  }

  changeSelectedStatus = () => this.setState({ isNewspaperSelected: !this.state.isNewspaperSelected})

  render() {
    return (
      <div className="App">
          <h1>MicroFilmography</h1>
          {this.state.isNewspaperSelected
           
          ? < NewspaperDetail
            details={this.state.newspaperDetails}
            issues={this.state.archives}
          />
          : < NewspaperContainer
            newspapers={this.state.newspapers}
            usState={this.state.usState}
            getNewspaper={this.getSelectedNewspaper}
          />}
      </div>
    )
  }
}

export default App;
