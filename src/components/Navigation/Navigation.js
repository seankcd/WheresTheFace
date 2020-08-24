import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav>
                <p onClick={() => onRouteChange('signout')} className='nav-links f3 link dim black pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <p onClick={() => onRouteChange('signin')} className='nav-links f3 link dim black pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='nav-links f3 link dim black pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;