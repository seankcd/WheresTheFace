import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        <div className='ranking'>
            {`${name} , your current entry count is...`}
            <div className='white f3'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;