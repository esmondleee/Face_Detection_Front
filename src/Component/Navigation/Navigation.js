import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
    if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-start', textDecoration: 'underline'}}>
                <p onClick={() => onRouteChange('signin')}  
                    className='f3 underline link garamond dim black pa3 pointer'>Sign Out</p>
            </nav>
        );
    }
    else {
        return (
            <nav >
                <p 
                    onClick={() => onRouteChange('signin')} 
                    className='f3 underline link garamond dim black pa3 pointer'>Sign in</p>
                <p 
                    onClick={() => onRouteChange('register')} 
                    className='f3 underline link garamond dim black pa3 pointer'>Register</p>
            </nav>
        );
    }
}


export default Navigation;

//<p className='f3 underline link garamond dim black pa3 pointer'>Register</p>//
//style={{display: 'flex', justifyContent: 'flex-start', textDecoration: 'underline'}}