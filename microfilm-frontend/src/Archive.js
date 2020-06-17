import React from 'react'
import Headline from './Headlines'

export default function Library({ archives }) {

const showHeadlines = () => archives.map(archive => <Headline archive={archive} key={archive.id}/>)

    return (
        <div className='archives'>
            <h1>Choose and Article</h1>
            <ul className='headlines'>
                {showHeadlines()}
            </ul>
        </div>
    )
}