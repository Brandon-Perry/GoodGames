import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LibraryItems from './LibraryItems'
import * as libraryActions from '../../store/library';
import GameItems from './GameItems'

const GameList = ({setSelectedGame}) => {

    
    const games = useSelector(state => state.library.current_library_games);


    return (
        
        <>
        {   
            games ? games.map(game => (
                <GameItems 
                    game={game} 
                    setSelectedGame={setSelectedGame}
                />
            )) : <p>No games found in this library</p>
        } 
        </>
    )
}

export default GameList