import React from 'react'

export default function IssuePages ( {image} ) {

// const displayImage = () => <embed src={image.pdf} width="1000px" height="3100px" />

const displayImage = () => <iframe src={`https://docs.google.com/gview?url=${image.pdf}&embedded=true`} title={image.sequence} width='750' height='750'></iframe>

    return (
        <div className='page'>
            {displayImage()}
        </div>
    )
}