import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LibraryItems from './LibraryItems'
import * as libraryActions from '../../store/library'


const LibraryList = () => {

    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch()
    
    

    const [activeLibrary, setLibrary] = useState(1)
    useEffect(()=> {
        // console.log('active library', activeLibrary)
        dispatch(libraryActions.loadSelectedLibrary(activeLibrary, userId))
    }, [activeLibrary])

    const libraries = useSelector(state => state.library.libraries)

    return (
        <>
        <h2>Libraries</h2>
        {
            libraries ? libraries.map(library => (
                <LibraryItems library={library} setLibrary={setLibrary} />
            )) : <p>No Libraries Found...</p>
        }
        </>
    )
}
export default LibraryList;