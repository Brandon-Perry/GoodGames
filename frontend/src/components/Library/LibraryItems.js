import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

import * as libraryActions from '../../store/library'


const LibraryItems = ({library}) => {
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch()
    
    

    const [activeLibrary, setLibrary] = useState([])
    useEffect(()=> {
        console.log('active library', activeLibrary)
        dispatch(libraryActions.loadSelectedLibrary(activeLibrary, userId))
    }, [activeLibrary])


    return (
        <div>
        <NavLink to='/library' 
            className='library_link'
            onClick={() => setLibrary(library.id)} 
            onclick={()=> console.log(activeLibrary)}
            id={library.id}>
                {library.name}
        </NavLink>
        </div>
    )
}

export default LibraryItems