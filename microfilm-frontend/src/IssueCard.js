import React from 'react'

export default function IssueCard ( {issue, getIssue} ) {

    return (
        <button onClick={() => getIssue(issue.url)}>{issue.date_issued}</button>
    )
}