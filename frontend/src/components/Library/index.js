import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import LibraryList from './LibraryList'
import GameList from './GameList';
import GameInfo from './GameInfo'
import '../AppPage/AppPage.css';



const Library = () => {

    const [selectedGame, setSelectedGame] = useState(null)

    return (
        <div className='app_home__container'>
            <div className='app_library__container'>
                <LibraryList />
            </div>
            <div className='app_library_game__container'>
                <GameList 
                    setSelectedGame={setSelectedGame}
                />
            </div>
            <div className='app_library_gameinfo__container'>
                <GameInfo
                    selectedGame={selectedGame}
                />
            </div>
        </div>
    )
}

export default Library