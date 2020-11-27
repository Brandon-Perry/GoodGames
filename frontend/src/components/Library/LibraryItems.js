import React from 'react';
import {NavLink} from 'react-router-dom'

const LibraryItems = ({library}) => {


    return (
        <div>
        
        <NavLink to='/library'>{library.name}</NavLink>
        </div>
    )
}

export default LibraryItems