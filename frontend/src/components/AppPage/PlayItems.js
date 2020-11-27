import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const PlayItems = ({game}) => {
    // console.log(game)

    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`

    return (
        <div id={game.steam_id} className='PlayItem__container'>
            <p>{game.name}</p>
            <img src={imgsrc}/>
        </div>
    )
}

export default PlayItems