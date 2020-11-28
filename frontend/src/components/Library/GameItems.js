import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LibraryItems from './LibraryItems'
import * as libraryActions from '../../store/library';

const GameItems = ({game, setSelectedGame}) => {

    
    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`

    return (
        
        <div className='PlayItem__container'>
            <img src={imgsrc} />
            <div className='PlayItem__name_studio'>
                <p 
                    className='PlayItem__name'
                    onClick={()=> setSelectedGame(game)}
                >
                    {game.name}
                </p>
                <p className='PlayItem__studio'>By studio</p>
            </div>
        </div>
    )
}

export default GameItems