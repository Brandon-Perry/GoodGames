import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import '../AppPage/AppPage.css'


const GameInfo = ({selectedGame}) => {

    const UpdateGameStatus = () => {

    }

    if (!selectedGame) {
        return (
            <>
            </>
        )
    }

    const game = selectedGame
    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`

    return (
        
        <div className='GameInfo__container'>
            <img src={imgsrc} />

            <div className='GameInfo__prop'>
                <h2>{game.name}</h2>
            </div>

            <div className='GameInfo__prop'>
                <p>{game.publisher ? 
                        game.publisher 
                        : 'No publisher information available'}</p>
            </div>

            <div className='GameInfo__prop'>
                <p>{game.genre ? 
                        game.genre 
                        : 'No genre information available'}</p> 
            </div>

            <div className='GameInfo__prop'>
                <p>{game.release_date ? 
                        game.release_date 
                        : 'No release date information available'}</p>
            </div>

            <div className='GameInfo__select_div'>
                <label>Update Game Status</label>
                <select 
                    id='game_status' 
                    name='gamestatus'
                    onChange={()=> UpdateGameStatus()}>
                    
                    {game.wantToPlay ? 
                        <option value='wantToPlay' selected>
                            Want To Play
                        </option> :
                        <option value='wantToPlay'>
                            Want To Play
                        </option>
                    }

                    {game.playing ? 
                        <option value='playing' selected>
                            Currently Playing
                        </option> :
                        <option value='playing'>
                            Currently Playing
                        </option>
                    }

                        {game.played ? 
                        <option value='played' selected>
                            Played
                        </option> :
                        <option value='played'>
                            Played
                        </option>
                    }           
                </select>
            </div>

        </div>
    )
}

export default GameInfo