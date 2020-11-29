import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import '../AppPage/AppPage.css'

import * as libraryActions from '../../store/library'


const GameInfo = ({selectedGame}) => {
    const dispatch = useDispatch()
    const current_library_games = useSelector(state => state.library.current_library_games);
    if (!selectedGame) {
        return (
            <>
            </>
        )
    }
    const game = selectedGame
    const imgsrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steam_id}/logo.png`

    const UpdateGameStatus = (e) => {
        e.stopPropagation();
        // console.log(e.target.value);
        // console.log('update game status fires')
        let new_status = e.target.value;


        if (new_status === 'played') {
            game.played = true;
            game.playing = false;
            game.wantToPlay = false
        } else if (new_status === 'playing') {
            game.played = false;
            game.playing = true;
            game.wantToPlay = false;
        } else if (new_status === 'wantToPlay') {
            game.played = false;
            game.playing = false;
            game.wantToPlay = true;
        } else {
            throw new Error()
        }

        let index;
        for (let i = 0; i < current_library_games.length; i++) {
            if (game.game_id === current_library_games[i].game_id) {
                index = i;
                break
            }
        }
        // console.log(index)
        // console.log(game)
        // console.log('about to fire library action')
        dispatch(libraryActions.updateLibraryGamePlayStatus(index,game))
        

    }



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
                    onChange={(e)=> UpdateGameStatus(e)}>
                    
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