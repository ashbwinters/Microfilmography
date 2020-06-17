import React from 'react'
// import Article from './Article'

export default function Headline( {archive} ) {
    return (
        <li>
            {archive.headline.main}
        </li>
    )
}