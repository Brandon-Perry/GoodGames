import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import LibraryList from './LibraryList'



const LibraryItems = ({library, setLibrary}) => {
    
    console.log(setLibrary)

    return (
        <div>
        <NavLink to='/library'
            key={library.id} 
            className='library_link'
            onClick={() => setLibrary(library.id)} 
            id={library.id}>
                {library.name}
        </NavLink>
        </div>
    )
}

export default LibraryItems