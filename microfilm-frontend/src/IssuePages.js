import React from 'react'

export default function IssuePages ( {image} ) {

    // const proxy = `https://cors-anywhere.herokuapp.com/`

    // const fetchImage = () => {
    //     fetch(`${proxy}${image.pdf}`)
    //         .then(response => response.json())
    //         .then(result => displayImage(result.pdf))
    // }

const displayImage = () => <embed src={image.pdf} width="800px" height="2100px" />

    return (
        <div>
            {/* {fetchImage()} */}
            {displayImage()}
        </div>
    )
}