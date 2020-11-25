import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AppPage.css';

import AppPageCurrentlyPlaying from './AppPageCurrentlyPlaying/index';
import AppPageWantToPlay from './AppPageWantToPlay/index';
import AppPageFeed from './AppPageFeed/index';
import AppPageLibrary from './AppPageLibrary/index'


const AppPage = () => {



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
                <AppPageLibrary />
            </div>


        </div>
    )
}

export default AppPage;