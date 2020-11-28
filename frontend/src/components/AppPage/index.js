import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AppPage.css';

import AppPageCurrentlyPlaying from './AppPageCurrentlyPlaying/index';
import AppPageWantToPlay from './AppPageWantToPlay/index';
import AppPageFeed from './AppPageFeed/index';
import LibraryList from '../Library/LibraryList'
import * as libraryActions from '../../store/library'


const AppPage = () => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.session.user.id);
 
    useEffect(()=> {
        dispatch(libraryActions.grabAllLibraries(userId))
    },[])
    

    return (
        <div className='app_home__container'>

            <div className='app_current-want__container'>
                <AppPageCurrentlyPlaying />
                <AppPageWantToPlay />
            </div>

            <div className='app_feed__container'>
                <AppPageFeed />
            </div>

            <div className='app_library__container'>
                <LibraryList />
            </div>


        </div>
    )
}

export default AppPage;