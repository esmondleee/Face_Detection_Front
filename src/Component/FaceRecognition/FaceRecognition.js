import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    const imageSize = {
        height: 'auto',
        width: ' 300px',
    }
    return( 
        <div className='center ma'>
            <div className='absolute nt2'>
                <img id='inputImage' src={ imageURL } alt='' style={ imageSize }/>
                <div className='bounding-box' style={{top: box.top_row, right: box.right_col, left: box.left_col, bottom: box.bottom_row}}>

                </div>
            </div>
        </div>
    );
}


export default FaceRecognition;