import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const AppPageWantToPlay = () => {
    const userId = useSelector(state => state.session.user.id);
    const [wantedGames, setWantedGames] = useState([])
    useEffect(() => {
        const loadWantedGames = async() => {
            const res = await fetch(`/api/users/${userId}/wantToPlay`);
            const data = await res.json();
            if (res.ok) {
                setWantedGames(data)
            }
            console.log('triggered')
            console.log(data)
        }
        loadWantedGames()
    },[])
    return (
        <h2>Want To Play</h2>
    )
}

export default AppPageWantToPlay