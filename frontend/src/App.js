import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage/index'
import SignUpFormPage from './components/SignUpFormPage/index';
import * as sessionActions from './store/session'
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage/index';
import AppPage from './components/AppPage/index';
import Library from './components/Library/index'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true))
  }, [dispatch]);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      <Switch>


        <Route path='/library'>
          <Library />
        </Route>

        <Route path='/login'>
          <LoginFormPage />
        </Route>

        <Route path='/signup'>
          <SignUpFormPage />
        </Route>
         
        <Route exact path='/'>
          {sessionUser ? <AppPage /> : <SplashPage />} 
        </Route>

      </Switch>
    </>
  );
}

export default App;
