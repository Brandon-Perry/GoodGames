import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CurrentlyPlayingItems from './CurrentlyPlayingItems'



const AppPageCurrentlyPlaying = () => {
   const userId = useSelector(state => state.session.user.id);
    useEffect(() => {
        
    })
    return (
        <div className='AppPageCurrentlyPlaying__container'>
            <h2>Currently Playing</h2>
            <CurrentlyPlayingItems />
        </div>
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