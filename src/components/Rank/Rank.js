import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        <div className='ranking'>
            <div className='white f3'>
                {`${name} , you've submited ${entries} photos`}
            </div>
        </div>
    );
}

export default Rank;