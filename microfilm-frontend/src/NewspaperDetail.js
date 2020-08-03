import React from 'react'
import IssueContainer from './IssueContainer'

export default function NewspaperDetail ( {details, issues } ) {

    return (
        <div>
            <h2>Title: {details.title}</h2>
            <h3>Location: {details.location}</h3>
            <h4>Published: {details.startYear} - {details.endYear}</h4>
            < IssueContainer issues={issues} />
        </div>
    )
}