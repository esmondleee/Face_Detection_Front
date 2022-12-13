import React from 'react';
import Tilt from 'react-parallax-tilt';
/*import TiltComponent from '../TiltComponent';*/
import User from '../../User.png';
import './Logo.css';

const Logo = () => {
    return(   
        <Tilt className='tilt center' 
            glareEnable={true} tiltMaxAngleX={10} 
            tiltMaxAngleY={10} perspective={700}  
            glareColor={"rgb(255,0,0)"}>
            
            <div>
                <img src={User} alt=''></img>
            </div>
        </Tilt>
    );
}
    


export default Logo;