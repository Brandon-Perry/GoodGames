import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {NavLink} from 'react-router-dom'

const LibraryItems = ({library}) => {
    const userId = useSelector(state => state.session.user.id);

    // const updateCurrentLibraryGames = async (event, libraryId) => {
    //     event.stopPropagation()
        
    //     const res = await fetch(`/api/1/library_games/1`);
    //     const library_games = await res.json()

    //     console.log(library_games)
    // }

    const [activeLibrary, setLibrary] = useState([])
    useEffect(()=> {
        (async()=> {
            const res = await fetch(`/api/users/${userId}/library_games/${activeLibrary}`);
            const data = await res.json();
            console.log(res)
            console.log(data)
            if (res.ok) {
                setLibrary(data.user_games)
            }
        })()
    }, [])

    return (
        <div>
        <NavLink to='/library' 
            className='library_link'
            // activeClassName='library_link__active'
            // onClick={(e) => updateCurrentLibraryGames(e,library.id)} 
            id={library.id}>
                {library.name}
        </NavLink>
        </div>
    )
}

export default LibraryItems