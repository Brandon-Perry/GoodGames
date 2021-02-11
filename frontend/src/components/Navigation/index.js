import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className = 'nav_bar__signlog'>
        <div className='nav_bar__login'>
          <NavLink to="/login">Log In</NavLink>
        </div>
        <div className='nav_bar__signup'>
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className='nav_bar__container'>
            <NavLink exact to="/">Home</NavLink>
          <div>
            {isLoaded && sessionLinks}
          </div>
        
    </div>
  );
}

export default Navigation;