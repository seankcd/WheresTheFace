import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center'>
            <div className='pa3'>
                <img alt='Face' src={imageUrl} width='700px' height='auto' />
            </div>
        </div>
    );
}

export default FaceRecognition;