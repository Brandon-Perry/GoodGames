import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LibraryItems from './LibraryItems'

const LibraryList = () => {

    const userId = useSelector(state => state.session.user.id);
    // const [libraries, setLibraries] = useState([])
    // useEffect(()=> {
    //     (async()=> {
    //         const res = await fetch(`/api/users/${userId}/libraries`);
    //         const data = await res.json();
    //         console.log(data.allLibraries)
    //         if (res.ok) {
    //             // setLibraries(data.allLibraries)
    //         }
    //     })()
    // }, [])

    const libraries = useSelector(state => state.library.libraries)

    return (
        <>
        <h2>Libraries</h2>
        {
            libraries ? libraries.map(library => (
                <LibraryItems library={library} />
            )) : <p>No Libraries Found...</p>
        }
        </>
    )
}

export default LibraryList;