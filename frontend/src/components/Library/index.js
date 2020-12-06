import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import LibraryList from './LibraryList'
import GameList from './GameList';
import GameInfo from './GameInfo'
import './library.css';



const Library = () => {

    const [selectedGame, setSelectedGame] = useState(null)

    return (
        <div className='library__container'>
            <div className='library_list__container'>
                <LibraryList />
            </div>
            <div className='library_game__container'>
                <GameList 
                    setSelectedGame={setSelectedGame}
                />
            </div>
            <div className='library_gameinfo__container'>
                <GameInfo
                    selectedGame={selectedGame}
                />
            </div>
        </div>
    )
}

export default Library