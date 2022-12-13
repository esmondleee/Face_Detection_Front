import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div>
            <p className='f3 center'>
                {'Clink the Button to Detect the Face! WOOOOOOOOOOOOOOOOOO'}
            </p>    
            <div className='center'>
                <div className='form pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70' type='tex' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib bg-light-green' 
                        onClick={onSubmit}>Detect!
                    </button>
                </div>
            </div>
        </div>
    );
    
}


export default ImageLinkForm;