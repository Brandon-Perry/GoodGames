import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AppPageCurrent.css'

const PlayItems = ({game}) => {
    // console.log(game)

    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`

    return (
        <div id={game.steam_id} className='PlayItem__container'>
            <img src={imgsrc}/> 
            <div className='PlayItem__name_studio'>
                <p className='PlayItem__name'>{game.name}</p>
                <p className='PlayItem__studio'>By studio</p>
            </div>
        </div>
    )
}

export default PlayItems