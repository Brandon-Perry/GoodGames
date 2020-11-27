import React from 'react';
import './AppPageWantToPlay.css'


const WantToPlayItems = ({game}) => {

    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`
    return (
        <>
            <img className='WantToPlay__img' src={imgsrc} />
        </>
    )
}

export default WantToPlayItems