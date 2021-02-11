import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import LoginFormPage from '../LoginFormPage/index'
import SignUpFormPage from '../SignUpFormPage/index'

import './SplashPage.css';


function SplashPage() {

    let [formState, setFormState] = useState(null)

    const updateToLogin = () => {
        setFormState('login')
    }

    const updateToSignUp = () => {
        setFormState('signup')
    }


    return (
        <>
        <div className='splash_greeting__div'>
            <h1 className='splash_greeting__header'>
                The App to Share Your Adventures and Find More
            </h1>
        </div>
        <div className='splash_continue_new__container'>
            <button onClick={updateToSignUp} className='splash_new_game'>New Game</button>
            <button onClick={updateToLogin} className='splash_continue_game'>Continue</button>
        </div>
        <div className='splash_demo__container'>
            <button className='splash_demo_game'>Demo</button>
        </div>
        {(formState === 'login') ? <LoginFormPage /> : null}
        {(formState === 'signup') ? <SignUpFormPage /> : null}
        </>
    )
    
}



export default SplashPage