import React from 'react'

export default function IssueDetails ( {image} ) {

    const proxy = `https://cors-anywhere.herokuapp.com/`

    const fetchImage = () => {
        fetch(`${proxy}${image.pdf}`)
            .then(response => response.json())
            .then(result => displayImage(result.pdf))
    }

const displayImage = (pdf) => <img src={pdf} alt={`page ${image.sequence}`}></img>

    return (
        <div>
            {fetchImage()}
        </div>
    )
}