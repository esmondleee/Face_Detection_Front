import React from 'react'
import Tilt from "react-parallax-tilt";
import "./TiltComponent.css";
  
const TiltComponent = () => {
    return (
        <Tilt className='tiltComponent' glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}  glareColor={"rgb(255,0,0)"}>
            <div>
            </div>
        </Tilt>
    )
}
  
export default TiltComponent;