import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AppPage.css';


const AppPage = () => {



    return (
        <div className='app_home__container'>

            <div className='app_current-want__container'>
                
            </div>

            <div className='app_feed__container'>

            </div>

            <div className='app_library__container'>

            </div>


        </div>
    )
}

export default AppPage;