import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AppPageWantToPlay.css'
import WantToPlayItems from './WantToPlayItems'


const AppPageWantToPlay = () => {
    const userId = useSelector(state => state.session.user.id);
    const [wantedGames, setWantedGames] = useState([])
    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/users/${userId}/wantToPlay`);
            const data = await res.json();
            // console.log(data.wantedGames)
            if (res.ok) {
                setWantedGames(data.wantedGames)
            }
            
        })()
    },[])
    return (
        <>
            <h2>Want To Play</h2>
            <div className='WantToPlay__container'>
                {
                    wantedGames ? wantedGames.map(game => (
                        <WantToPlayItems game={game} />
                    )) : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default AppPageWantToPlay