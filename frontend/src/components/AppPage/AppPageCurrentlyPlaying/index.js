import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PlayItems from '../PlayItems'



const AppPageCurrentlyPlaying = () => {
    const userId = useSelector(state => state.session.user.id);
    const [playingGames, setPlayingGames] = useState([])
    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/users/${userId}/playing`);
            const data = await res.json();
            // console.log(data)
            // console.log(data.playing)
            if (res.ok) {
                setPlayingGames(data.playing)
            }
            
        })()
    },[])
    return (
        <>
            <h2>Playing</h2>
            {
                playingGames ? playingGames.map(game => (
                    <PlayItems game={game} />
                )) : <p>Loading...</p>
            }
        </>
    )
}

export default AppPageCurrentlyPlaying


// useEffect(() => {
// const loadGraph = async () => {
// const res = await fetch(
// `/api/holdings/current/${props.holding.ticker}`
// );
// res.data = await res.json();
// if (res.ok) {
// setGraphData(res.data.res.c);
// }
// setLoading(false);
// };
// loadGraph();
// }, [props.holding.ticker]); 