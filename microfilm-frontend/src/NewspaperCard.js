import React from 'react'

export default function NewspaperCard ( {newspaper, getNewspaper} ) {


    return (
        <li className='newspaper-title' onClick={() => getNewspaper(newspaper.url)}>{newspaper.title}</li>
    )
}