import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PlayItems from '../PlayItems'

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
            {
                wantedGames ? wantedGames.map(game => (
                    <PlayItems game={game} />
                )) : <p>Loading...</p>
            }
        </>
    )
}

export default AppPageWantToPlay