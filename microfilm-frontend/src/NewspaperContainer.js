import React from 'react'
import NewspaperCard from './NewspaperCard'

export default function NewspaperContainer ( {newspapers, usState, getNewspaper} ) {

    const displayTitles = () => newspapers.map(newspaper => 
        < NewspaperCard 
            newspaper={newspaper}
            key={newspaper.lccn}
            getNewspaper={getNewspaper}
        />)

    return (
        <div>
            <h2 className='state-name'>{usState}</h2>
           <ul className='title-list'>
               <h3>Choose a Newspaper</h3>
                {displayTitles()}
            </ul>
        </div>

    )
}