import React from 'react'

export default function Library({ archives }) {

    const showHeadlines = () => archives.map(archive => console.log(archive.headline.main))

    return (
        <div className='archives'>
            <h1>Choose and Article</h1>
            {showHeadlines()}
            
        </div>
    )
}