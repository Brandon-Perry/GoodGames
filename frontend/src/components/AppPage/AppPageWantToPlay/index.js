import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const AppPageWantToPlay = () => {
    const userId = useSelector(state => state.session.user.id);
    const [wantedGames, setWantedGames] = useState([])
    useEffect(() => {
        const loadWantedGames = async() => {
            const res = await fetch(`/api/users/${userId}/wantedGames`);
            res.data = res.json();
            if (res.ok) {
                setWantedGames(res.data)
            }
        }
    },[])
    return (
        <h2>Want To Play</h2>
    )
}

export default AppPageWantToPlay