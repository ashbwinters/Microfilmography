import React, { Component } from 'react'
import IssueCard from './IssueCard'
import IssuePages from './IssuePages'

const proxyURL = `https://cors-anywhere.herokuapp.com/`

export default class IssueContainer extends Component {

    state = {
        issue: [],
        pages: [],
        images: []
    }

    showIssues = () => this.props.issues.map(issue => < IssueCard issue={issue} key={issue.date_issued} getIssue={this.getIssue}/>)

    getIssue = (issueURL) => {
        fetch(`${proxyURL}${issueURL}`)
            .then(response => response.json())
            .then(result => this.setState({pages: result.pages}))
            .then(this.getPages)
    }

    getPages = () => {
        this.state.pages.map(page => this.fetchEachPage(page.url))
    }
    
    fetchEachPage = (pageURL) => {
        fetch(`${proxyURL}${pageURL}`)
            .then(response => response.json())
            .then(result => this.setState({images: [...this.state.images, result]}))
    }

    displayImagesOfPages = () => this.state.images.map(image => <IssuePages image={image} key={image.sequence} />)

    render() {
        
        return (

            <div>
                <div className='issue-details'>
                    {this.displayImagesOfPages()}
                </div>
                <div className='issue-list'>
                    <p>View Issue By Date</p>
                    {this.showIssues()}
                </div>
            </div>
        )

    }


}